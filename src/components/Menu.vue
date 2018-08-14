<template>
    <div>
         <nav class="menu">
            <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"  v-model="checkbox_checked"/>
            <label class="menu-open-button" for="menu-open">
                <span v-on:click.stop class="lines line-1"></span>
                <span v-on:click.stop class="lines line-2"></span>
                <span v-on:click.stop class="lines line-3"></span>
            </label>
            <router-link to="/" class="menu-item blue">主页</router-link>
            <router-link to="/" class="menu-item green">布局</router-link>
            <a href="http://marszm.cn/blog/wordpress/" class="menu-item red">博客</a>
            <a href="http://marszm.cn/backend/" class="menu-item purple">后台</a>
            <a href="#" class="menu-item orange">3D</a>
            <router-link to="/about" class="menu-item lightblue">关于</router-link>
            <!-- <a href="#" class="menu-item orange">3D</a> -->
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkbox_checked:false,
        }
    },
    components:{

    },
    methods: {
        hideMenu:function(){
            this.checkbox_checked = false;
        }
    }
    
}
</script>

<style lang="less" scoped>
@menu_circle_size:50px;
@font-size:18px;

.menu-item,
.menu-open-button {
   background: #EEEEEE;
   border-radius: 100%;
   width: @menu_circle_size;
   height: @menu_circle_size;
   margin-left: -30px;
   position: absolute;
   color: #FFFFFF;
   text-align: center;
   line-height: @menu_circle_size;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   -webkit-transition: -webkit-transform ease-out 200ms;
   transition: -webkit-transform ease-out 200ms;
   transition: transform ease-out 200ms;
   transition: transform ease-out 200ms, -webkit-transform ease-out 200ms;
}

.menu-open {
   display: none;
}

.lines {
   width: 25px;
   height: 3px;
   background: #596778;
   display: block;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left: -12.5px;
   margin-top: -1.5px;
   transition: transform 200ms;
}
//横线
.line-1 {
   transform: translate3d(0, -8px, 0);
}

.line-2 {
   transform: translate3d(0, 0, 0);
}

.line-3 {
   transform: translate3d(0, 8px, 0);
}

.menu-open:checked + .menu-open-button .line-1 {
   transform: translate3d(0, 0, 0) rotate(45deg);
}

.menu-open:checked + .menu-open-button .line-2 {
   transform: translate3d(0, 0, 0) scale(0.1, 1);
}

.menu-open:checked + .menu-open-button .line-3 {
   transform: translate3d(0, 0, 0) rotate(-45deg);
}

.menu {
   margin: auto;
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   width: 80px;
   height: 80px;
   text-align: center;
   box-sizing: border-box;
   font-size: @font-size;
}


/* .menu-item {
   transition: all 0.1s ease 0s;
} */

.menu-item:hover {
   background: #EEEEEE;
   color: #3290B1;
}

.menu-item:nth-child(n+3) {
   transition-duration: 180ms;
}

.menu-open-button {
   z-index: 2;
   transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
   transition-duration: 400ms;
   transform: scale(1.1, 1.1) translate3d(0, 0, 0);
   cursor: pointer;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
}

.menu-open-button:hover {
   transform: scale(1.2, 1.2) translate3d(0, 0, 0);
}

.menu-open:checked + .menu-open-button {
   transition-timing-function: linear;
   transition-duration: 200ms;
   transform: scale(0.8, 0.8) translate3d(0, 0, 0);
}

.menu-open:checked ~ .menu-item {
   transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
}

.menu-open:checked ~ .menu-item:nth-child(3) {
   transition-duration: 180ms;
   transform: translate3d(0.08361px, -104.99997px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(4) {
   transition-duration: 280ms;
   transform: translate3d(90.9466px, -52.47586px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(5) {
   transition-duration: 380ms;
   transform: translate3d(90.9466px, 52.47586px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(6) {
   transition-duration: 480ms;
   transform: translate3d(0.08361px, 104.99997px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(7) {
   transition-duration: 580ms;
   transform: translate3d(-90.86291px, 52.62064px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(8) {
   transition-duration: 680ms;
   transform: translate3d(-91.03006px, -52.33095px, 0);
}

.menu-open:checked ~ .menu-item:nth-child(9) {
   transition-duration: 780ms;
   transform: translate3d(-0.25084px, -104.9997px, 0);
}

.blue {
   background-color: #669AE1;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.blue:hover {
   color: #669AE1;
   text-shadow: none;
}

.green {
   background-color: #70CC72;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.green:hover {
   color: #70CC72;
   text-shadow: none;
}

.red {
   background-color: #FE4365;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.red:hover {
   color: #FE4365;
   text-shadow: none;
}

.purple {
   background-color: #C49CDE;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.purple:hover {
   color: #C49CDE;
   text-shadow: none;
}

.orange {
   background-color: #FC913A;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.orange:hover {
   color: #FC913A;
   text-shadow: none;
}

.lightblue {
   background-color: #62C2E4;
   box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
   text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
}

.lightblue:hover {
   color: #62C2E4;
   text-shadow: none;
}

.credit {
   margin: 24px 20px 120px 0;
   text-align: right;
   color: #EEEEEE;
}

.credit a {
   padding: 8px 0;
   color: #C49CDE;
   text-decoration: none;
   transition: all 0.3s ease 0s;
}

.credit a:hover {
   text-decoration: underline;
}
</style>

