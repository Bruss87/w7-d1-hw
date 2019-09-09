import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data:{
          activities:["Grocery shopping", "Doctor's appoinment", "Lawn mowing", "Laundry"],
          newActivity: ""
        },
        methods:{
            saveNewActivity: function(){
                this.activities.push(this.newActivity);
                this.newActivity = "";
            },
        }
    })
})