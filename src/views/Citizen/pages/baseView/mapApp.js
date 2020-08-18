
import * as PIXI from 'pixi.js'
import {GlowFilter} from '@pixi/filter-glow';
import _ from "lodash";
import config from './config';

const preUrl = './assets/';

function init(view){
    var locations = _.cloneDeep(config);
    
    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new PIXI.Application({
        // width: 1080, height: 720, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        width: 1280, height: 720, backgroundColor: 0x1099bb, resolution: 1,
    });

    const preUrl = './assets/';
    // The application will create a canvas element for you that you
    // can then insert into the DOM
    view.$refs.main.appendChild(app.view);

    var mainContainer = new PIXI.Container();
    app.stage.addChild(mainContainer);
    const spriteBackGroundMap = PIXI.Sprite.from( preUrl +'Map.jpg');
    mainContainer.addChild(spriteBackGroundMap);
    spriteBackGroundMap.interactive = true;
    spriteBackGroundMap.on('pointerup',onBackGroundMapUp);
    // Set the initial position
    // spriteBackGroundMap.anchor.set(0.5);
    // spriteBackGroundMap.x = app.screen.width / 2;
    // spriteBackGroundMap.y = app.screen.height / 2;

    // 创建弹窗
    var popwinContainer = new PIXI.Container();
    app.stage.addChild(popwinContainer);
    var popBackGroundBox = PIXI.Sprite.from(preUrl + 'popbox.png');
    popwinContainer.addChild(popBackGroundBox);
    var buildingImg = new PIXI.Sprite();
    buildingImg.width = 231;
    buildingImg.height = 131;
    popBackGroundBox.addChild(buildingImg);
    var buttonsList = [];
    for(var i=0;i<3;i++){
        var btn = PIXI.Sprite.from(preUrl +'button.png')
        popBackGroundBox.addChild(btn);
        btn.y = popBackGroundBox.height + i*btn.height + i*10 +2;
        btn.x = 60;
        btn.interactive=true;
        btn.buttonMode = true;
        var btnText = new PIXI.Text('btn',{fontFamily : 'Arial', fontSize: 18, fill : 0xff1010, align : 'left'});
        btnText.x = btn.width/2 - btnText.width/2 -5;
        btnText.y = 5;
        btn.addChild(btnText);
        buttonsList.push(btn);
        // btn.visible=false;
    }

    //文字提示
    const style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 20,
        // fontStyle: 'italic',
        fontWeight: 'bold',
        fill: ['#ffffff', '#00ff99'], // gradient
        stroke: '#4a1850',
        strokeThickness: 5,
        // dropShadow: true,
        // dropShadowColor: '#000000',
        // dropShadowBlur: 4,
        // dropShadowAngle: Math.PI / 6,
        // dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440,
    });
    const richText = new PIXI.Text('BuildingName', style);
    richText.x = 15;
    richText.y = 8;
    popBackGroundBox.addChild(richText)
    popBackGroundBox.x = -1000;
    popBackGroundBox.y = -1000;
    // 循环处理location
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
    function resetPop(){
        for(var item of locations){
            item.state = 'deactive';
            item.icon_Sprite.filters = [];
        }
        for(var btn of buttonsList){
            btn.visible=false;
        }
    }
    function onBackGroundMapUp(){
        resetPop();
        popBackGroundBox.x = -1000;
        popBackGroundBox.y = -1000;
    }
    function onBtnUp(e) {
        if(this.location.state == 'deactive'){
            resetPop();
            this.filters = [
                new GlowFilter({ distance: 15, outerStrength: 2 })
            ];
            
            buildingImg.texture = this.location.img_texture;
            //展示位置需要根据当前坐标位置进行计算，先简单这么算
            popBackGroundBox.x = parseInt(this.location.x_pos) + 50;
            popBackGroundBox.y = parseInt(this.location.y_pos) - 50;
            buildingImg.y = popBackGroundBox.height-buildingImg.height;
            richText.text = this.location.name;
            for(var i=0;i<this.location.buttons.length;i++){
                buttonsList[i].visible=true;
                buttonsList[i].getChildAt(0).text = this.location.buttons[i].label;
            }
            this.location.state = 'active'
        }else{
            this.filters = [];
            popBackGroundBox.visible=false;
            this.location.state = 'deactive';
        }
    }
}

export default init;