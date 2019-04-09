<template>
    <div class="calendar">
        <div class="header">
            <h1>{{title}}</h1>
            <div class="right"></div>
            <div class="left"></div>
        </div>
        <div class='month' :class="{ new: monthNew }">
            <div class='week' v-for="(value, key) in currentMonthData" :key="key" :data-week='value.week'>
                <div :class="monthClass(day.outerClass)" v-for="day in value.days">
                    <div class="day-name">{{day.name}}</div>
                    <div class="day-number">{{day.number}}</div>
                    <div class="day-events">{{day.events}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import  './calCode.js'
let moment = require("moment");
let today = moment();
require('moment/locale/zh-cn');
export default {
    data:function(){
        return{
            today :null,
            monthNew: true,
            current:null,
            title:'',
            currentMonthData:[
                {
                    week:'1',
                    days:[
                        {
                            day:'',
                            name:'',
                            number:'',
                            events:'',
                            outerClass:[''],
                        }
                    ],
                }
            ],
            eventData:[
            { eventName: 'Lunch Meeting w/ Mark', calendar: 'Work', color: 'orange' },
            { eventName: 'Interview - Jr. Web Developer', calendar: 'Work', color: 'orange' },
            { eventName: 'Demo New App to the Board', calendar: 'Work', color: 'orange' },
            { eventName: 'Dinner w/ Marketing', calendar: 'Work', color: 'orange' },
        
            { eventName: 'Game vs Portalnd', calendar: 'Sports', color: 'blue' },
            { eventName: 'Game vs Houston', calendar: 'Sports', color: 'blue' },
            { eventName: 'Game vs Denver', calendar: 'Sports', color: 'blue' },
            { eventName: 'Game vs San Degio', calendar: 'Sports', color: 'blue' },
        
            { eventName: 'School Play', calendar: 'Kids', color: 'yellow' },
            { eventName: 'Parent/Teacher Conference', calendar: 'Kids', color: 'yellow' },
            { eventName: 'Pick up from Soccer Practice', calendar: 'Kids', color: 'yellow' },
            { eventName: 'Ice Cream Night', calendar: 'Kids', color: 'yellow' },
        
            { eventName: 'Free Tamale Night', calendar: 'Other', color: 'green' },
            { eventName: 'Bowling Team', calendar: 'Other', color: 'green' },
            { eventName: 'Teach Kids to Code', calendar: 'Other', color: 'green' },
            { eventName: 'Startup Weekend', calendar: 'Other', color: 'green' }
            ]
        }
    },
    beforeMount:function(){
        this.updateLocale(this.$store.state.i18n_locale);
        this.currentMonthData = [];
        this.backFill();
        this.currentMonth();
        this.fowardFill();
        this.monthNew = true;
    },
    mounted:function(){
        // var calendar = new Calendar('#calendar', this.eventData);
    },
    computed:{
        locale(){
            return this.$store.state.i18n_locale;
        }
    },
    watch:{
        locale:function(lang,oldValue){
            this.updateLocale(lang);
        }
    },
    methods:{
        updateLocale:function(lang){
            if(lang=='zh'){
                moment.locale('zh-cn');
            }else{
                moment.locale(lang);
            }
            this.today = moment();
            this.current = moment().date(1);
            this.title = this.current.format('MMMM YYYY');
        },
        backFill:function(){
            var clone = this.current.clone();
            var dayOfWeek = clone.day();
            if(!dayOfWeek) { return; }

            clone.subtract(dayOfWeek+1,'days');
        
            for(var i = dayOfWeek; i > 0 ; i--) {
                this.drawDay(clone.add(1,'days'));
            }
            // console.log(this.currentMonthData);
        },
        monthClass:function(outerClass){
            return outerClass;
        },
        fowardFill:function(){
            var clone = this.current.clone().add(1,'months').subtract(1,'days');
            var dayOfWeek = clone.day();
        
            if(dayOfWeek === 6) { return; }
        
            for(var i = dayOfWeek; i < 6 ; i++) {
                this.drawDay(clone.add(1,'days'));
            }
        },
        currentMonth:function(){
            var clone = this.current.clone();
            while(clone.month() === this.current.month()) {
                this.drawDay(clone);
                clone.add(1,'days');
            }
            console.log(this.currentMonthData);
        },
        updateWeek:function(day,newDay){
            var hasWeek = false;
            this.currentMonthData.forEach(function(item,index){
                if(item.week == day.week()){
                    hasWeek =true;
                    item.days.push(newDay);
                }
            });
            if(!hasWeek){
                this.currentMonthData.push({week:day.week(),days:[newDay]});
            }
            // if(!this.week || day.day() === 0) { //一周的第0天或者不存在week创建一个week
            //     // this.week = createElement('div', 'week');
            //     return {week:day.week(),days:[]}
            // }
        },
        getDayClass:function(day){
            var classes = ['day'];
            if(day.month() !== this.current.month()) {
                classes.push('other');
            } else if (today.isSame(day, 'day')) {
                classes.push('today');
            }
            return classes.join(' ');
        },
        drawDay:function(day){
            var self = this;
            var newDay = {};
            //Outer Day
            newDay.outerClass = this.getDayClass(day);

            // outer.addEventListener('click', function() {
            //     self.openDay(this);
            // });
            //Day Name
            newDay.name = day.format('ddd');
            //Day Number
            newDay.number = day.format('DD');
            newDay.events = '';
            // this.drawEvents(day, events);
            this.updateWeek(day,newDay);
        }
    }
}
</script>


<style lang="less" scoped>
    @import "./calStyle.less";
</style>
