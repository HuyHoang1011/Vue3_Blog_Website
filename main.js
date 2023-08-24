const myVue = Vue.createApp({
    data(){
        return{
            cac_bai_viet:[
                {tieude:'Bài viết đầu', tacgia:'Huy Hoàng', ngay:'10/11/2003', noidung:"Đây là bài viết đầu tiên của tôi..."},
                {tieude:'Bài viết thứ hai', tacgia:'Quốc Thạnh', ngay:'24/08/2023', noidung:"Đây là bài viết thứ hai của tôi..."},

            ],
            tieude:"",
            ngay:"",
            tacgia:"",
            noidung:"",
        };
    },
    components:{
        'bai_viet':{
            props:['bv'],
            template:`
            <div id="content">
             <h2>{{bv.tieude}}</h2>
    
             <h3>{{bv.tacgia}}</h3>
      
             <h4>{{bv.ngay}}</h4>
            
             <p>{{bv.noidung}}</p>
            </div>
            `
        }
    },
    methods: {
        dang_bai_moi: function(){
            var bai_viet_moi = {
                tieude:this.tieude,
                tacgia:this.tacgia,
                ngay:this.ngay,
                noidung:this.noidung
            };
            this.cac_bai_viet.push(bai_viet_moi);
            this.tieude = '';
            this.tacgia = '';
            this.ngay = '';
            this.noidung = '';
        }    
    },
});

myVue.mount('#container');