<template>
  <div class="map-box">
      <div class="content" ref="main">

      </div>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
import {GlowFilter} from '@pixi/filter-glow';
export default {
    data(){
        return{

        }
    },
    mounted(){
        var locations = [
            {
                id:"1",
                x_pos:'388',
                y_pos:'472',
                icon_type:'location_red.png',
                icon_Sprite:'',
                img:'base.jpg',
                img_texture:null,
                name:'Citizen Center',
                state:'deactive', //deactive active
                buttons:[
                    {
                        label: '进入',
                        action:'Enter',
                    }
                ]
            },
        ]
        // The application will create a renderer using WebGL, if possible,
        // with a fallback to a canvas render. It will also setup the ticker
        // and the root stage PIXI.Container
        const app = new PIXI.Application({
            // width: 1080, height: 720, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
            width: 1280, height: 720, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio,
        });
        // The application will create a canvas element for you that you
        // can then insert into the DOM
        this.$refs.main.appendChild(app.view);
        var mainContainer = new PIXI.Container();
        app.stage.addChild(mainContainer);
        const spriteBackGroundMap = PIXI.Sprite.from('./assets/Map.jpg');
        mainContainer.addChild(spriteBackGroundMap);
        // Set the initial position
        // spriteBackGroundMap.anchor.set(0.5);
        // spriteBackGroundMap.x = app.screen.width / 2;
        // spriteBackGroundMap.y = app.screen.height / 2;

        // Opt-in to interactivity
        // sprite.interactive = true;

        // Shows hand cursor
        // sprite.buttonMode = true;

        // Pointers normalize touch and mouse
        // sprite.on('pointerdown', onClick);

        // Alternatively, use the mouse & touch events:
        // sprite.on('click', onClick); // mouse-only
        // sprite.on('tap', onClick); // touch-only
        var preUrl = './assets/';
        for(var location of locations){
            //图标
            var icon_Sprite =  PIXI.Sprite.from(preUrl+location.icon_type);
            icon_Sprite.x = location.x_pos;
            icon_Sprite.y = location.y_pos;
            icon_Sprite.interactive = true;
            icon_Sprite.buttonMode = true;
            icon_Sprite.location = location;
            icon_Sprite.on('pointerup',onBtnUp); // mouse-only
            location.icon_Sprite = icon_Sprite;
            mainContainer.addChild(icon_Sprite);

            //贴图
            var img_texture =  PIXI.Texture.from(preUrl+location.img);
            location.img_texture = img_texture;
        }

        function onBtnUp(e) {
            if(this.location.state == 'deactive'){
                this.filters = [
                    new GlowFilter({ distance: 15, outerStrength: 2 })
                ];
                this.location.state = 'active'
            }else{
                this.filters = [];
                this.location.state = 'deactive';
            }
            console.log(this.location)
        }
    }
}
</script>

<style lang="less" scoped>
    .map-box{
        width: 100%;
        margin-top: 5px;
        z-index: 2;
        .content{
            display: flex;
            justify-content: center;
        }
    }
</style>