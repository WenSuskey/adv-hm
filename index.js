// $.ajax({
//     url: "/api/getWeather",
//     data: {
//       zipcode: 97201
//     },
//     success: function( result ) {
//       $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
//     }
//   });
const test = document.getElementById('title')
class MyQuery {
    constructor(query){
        this.elements = document.querySelectorAll(query)
    }
    html(innerHTML){
        this.elements.forEach((el)=>{
            el.innerHTML= innerHTML;
        });
        return this;
    }
    on(type,handler){
        this.elements.forEach(el=>{
            el.addEventListener(type,handler)
        })
        return this
    }
    show(){
        this.elements.forEach(el=>{
            el.style.display="block"
        })
        return this
    }
    hide(){
        this.elements.forEach(el=>{
            el.style.display="none"
        })
        return this
    }
    addClass(className){
        this.elements.forEach(el=>{
            el.classList.add(className)
        })
        return this
    }
    removeClass(className){
        this.elements.forEach(el=>{
            el.classList.remove(className)
        })
        return this
    }
    attr(attribute){
        let res 
        this.elements.forEach(el=>{
            res =el.getAttribute(attribute)
        })
        return res
    }
    prop(property){
        let res 
        this.elements.forEach(el=>{
            res = el[property]
        })
        return res
    }
}



//#1
  const $$ = (query) => new MyQuery(query);
  const title = $$("h1.title")
  title.html("Hello World")
  $$( "#button-container #show" ).on( "click", function( event ) {
    title.show();
  });
  $$( "#button-container #hide" ).on( "click", function( event ) {
    title.hide();
  });
  $$("button").addClass("red")

//#2
$$.ajax = async (config) => {
    const res = await (await fetch(config.url)).json()
    function isEvent(event) {
        return event.startDate === config.data.startDate;
      }
    const event = res.find(isEvent)
    if(event){
        config.success(event.eventName)
    }
    
};

$$.ajax({
    url: "http://localhost:3000/events",
    data: {
        startDate: "2022-10-06"
    },
    success: function( result ) {
    title.html( "<strong>" + result + "</strong> is COMING" );
    }
});

//#3
$$("#show").removeClass("red")
const input = $$( "input" )
console.log(input.attr( "checked" ))
console.log($$( "input" ).prop( "checked" ) )