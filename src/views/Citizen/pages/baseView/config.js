var id=0;
var locations = [
    {
        id:id++,
        type:'center',
        x_pos:'388',
        y_pos:'472',
        icon_type:'location_red.png',
        icon_Sprite:'',
        img:'base.jpg',
        img_texture:null,
        name:'市民中心',//Citizen Center
        state:'deactive', //deactive active
        buttons:[
            {
                label: '进入',
                action:'Enter',
            }
        ]
    },
    {
        id:id++,
        type:'airport',
        x_pos:'514',
        y_pos:'288',
        icon_type:'location_red.png',
        icon_Sprite:'',
        img:'airport.jpg',
        img_texture:null,
        name:'空港',//Citizen Center
        state:'deactive', //deactive active
        buttons:[
            {
                label: '进入',
                action:'Enter',
            }
        ]
    },
    {
        id:id++,
        type:'bar',
        x_pos:'569',
        y_pos:'436',
        icon_type:'location_red.png',
        icon_Sprite:'',
        img:'bar.jpg',
        img_texture:null,
        name:'酒吧',//Citizen Center
        state:'deactive', //deactive active
        buttons:[
            {
                label: '进入',
                action:'Enter',
            }
        ]
    }
]

export default locations;