let image1 ="actedlogo.jpg";
let image2='afscmelogo.jpg';
let image3="workingamericalogo.jpg";
let image4="seiulogo.jpg";
let image5="education.jpg";
let image6 ="Resass.jpg";
let image7='projcor.jpg';
let image8='Projsup.jpg';
let image9='unioncon.jpg';
let image10='assdir.jpg';

const images =[image1, image2, image3,image4,image5,image6,image7,image8,image9,image10]

const { createApp } = Vue

createApp({
  data() {
    return {
        images,
        acted:images[0],
        boston:images[4],
        wfse:images[1],
        seiu:images[3],
        WA:images[2],


    }
    },  methods:{
    updateimage(id){
        this.boston= images[id]

    },
    resetimage(){
        this.boston=images[4]
    },
        
    updateimage1(id){
        this.wfse= images[id]

    },

    resetimage1(){
        this.wfse=images[1]

    },
    updateimage2(id){
        this.seiu= images[id]

    },

    resetimage2(){
        this.seiu=images[3]

    },
    updateimage3(id){
        this.WA= images[id]

    },

    resetimage3(){
        this.WA=images[2]

    },
    updateimage4(id){
        this.acted= images[id]

    },

    resetimage4(){
        this.acted=images[0]

    },

  },  template:
  `
  <section class="cards">
    <div class="content">

        <div class="card">
            <div class="about-image">
            <div>
                <img :src="boston" @mouseover="updateimage(5)" @mouseleave="resetimage"/>
            </div>
            <div class="info">
            <h3>Machine Learning Research Assistant</h3></a>
            </div> 
            </div>
        </div>


        <div class="card">
        <div class="about-image">
        <div>
        <img :src="wfse" @mouseover="updateimage1(7)" @mouseleave="resetimage1"/>
        </div>
        <div class="info">
        <h3>Project supervisor</h3></a>
        </div> 
        </div>
        </div>
        <div class="card">
            <div class="about-image">
            <div>
            <img :src="seiu" @mouseover="updateimage2(8)" @mouseleave="resetimage2"/>
            </div>
            <div class="info">
            <h3>Union Consulant</h3></a>
            </div> 
            </div>
        </div>
        <div class="card">
            <div class="about-image">
            <div>
            <img :src="WA" @mouseover="updateimage3(9)" @mouseleave="resetimage3"/>
            </div>
            <div class="info">
            <h3>Assistant Director</h3></a>
            </div> 
            </div>
        </div>
        <div class="card">
            <div class="about-image">
            <div>
            <img :src="acted" @mouseover="updateimage4(6)" @mouseleave="resetimage4"/>
            </div>
            <div class="info">
            <h3>Project Coordinator</h3></a>
            </div> 
            </div>
        </div>
    </div>
</section>
  
  `
}).mount('#app')

