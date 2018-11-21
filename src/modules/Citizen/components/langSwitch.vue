<template>
    <Dropdown trigger="click" class="override" @on-click="switchLang">
        <a class="fontColor" href="javascript:void(0)">
            {{currentLang}}
            <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu class="fontColor" slot="list">
            <DropdownItem name = 'en'>EN</DropdownItem>
            <DropdownItem name = 'cn'>中文</DropdownItem>
        </DropdownMenu>
    </Dropdown>
</template>

<script>

export default {
    data:function(){
        return {
            currentLang : 'EN'
        }
    },
    methods:{
        switchLang:function(name){
            if(name == 'en')
            {
                this.$i18n.locale = 'en';
                this.currentLang = 'En';
            }else{
                this.$i18n.locale = 'zh';
                this.currentLang = '中文'
            }
        }
    }
}
</script>


<style lang="less" scoped>
    .override /deep/ .ivu-select-dropdown{
        background-color: #515a6ed5;
    }
    .override /deep/ .ivu-dropdown-item{
        color: whitesmoke;
    }
    .override /deep/ .ivu-dropdown-item:hover{
        background: slategrey;
    }
    .fontColor{
        color: #8DB9ED;
    }
</style>
