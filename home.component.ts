import { Component, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

  ngOnInit(){
    this.createPlot();
  }

  createPlot(){    
      
  var data = [
    {streamer:'', streamval:0}, 
    {streamer:'DrDisrespect', streamval:61}, 
    {streamer:'Tfue', streamval:47},        
    {streamer:'Shroud', streamval:67},                
    {streamer:'CouRage', streamval:58}, 
    {streamer:'Just9n', streamval:50},
    {streamer:'FellowTJ', streamval:27},                           
    {streamer:'Chadd', streamval:30},          
    {streamer:'KTXGamer', streamval:33},
    {streamer:'Wadu',streamval:18},            
    {streamer:'Dynamo', streamval:37},                
    {streamer:'Mortal', streamval:45}, 
    {streamer:'Ninja', streamval:54},                                               
    {streamer:'TeluguGamer', streamval:47}                                            
];

let range = [];
data.forEach(element => {
      range.push(element.streamer);
});            

var width = 800;
var height = 700;

var svg = d3.select("#plot").append("svg").attr("width", width).attr("height", height)
.style("background","#a0ab96");           

var g = svg.append("g")                  
.attr("transform", "translate(" + 30 + ", " + 30 + ")");

g.append("image")
.attr("xlink:href", "https://www.excelra.com/wp-content/uploads/2018/10/excelra_logo.png")     
.attr("id", "myImg")       
.attr("width", 200)
.attr("height", 100)
.attr("x", 570)
.attr("y",-40);

var xscale = d3.scalePoint().domain(range).range([0, width-200]);                     

var yscale = d3.scaleLinear().domain([0, 70]).range([height-200, 0]);

var xaxis = d3.axisBottom().scale(xscale);
            
var yaxis = d3.axisLeft().scale(yscale);

g.append("g").attr("transform", "translate(" + 50 + ", " + 520 + ")").call(xaxis)
.selectAll("text")
.attr("font-size", "15px")
.attr("fill","#1b8244")
.attr("stroke", "#1b8244")
.attr("text-anchor","end")
.attr("transform","rotate(-40)");

g.append("g").attr("transform", "translate(" + 50 + ", " + 20 + ")").call(yaxis)
.selectAll("text")
.attr("font-size", "15px")
.attr("fill","purple")
.attr("stroke", "purple");


var bar = g.selectAll(".bar").data(data).enter().append("rect")
.attr("class", "bar")
.attr("x", function(d){ return (xscale(d.streamer)) })
.attr("y", function(d){ return yscale(d.streamval); })
.attr("width", 40)            
.attr("height", function(d, i){

    return 500 - yscale(d.streamval);
})
.on("mouseover", onMouseOver)
.on("mouseout", onMouseOut)
.attr("transform", "translate(10,20)")
.attr("fill", "#5f7510")    
.attr("stroke","black")
.attr("stroke-width","2px")
.attr("stroke-linecap","round");          

g.append("text").attr("x", 210).attr("y", 5)                      
.attr("font-size","25px")
.attr("stroke","brown")
.attr("font-family","Helvetica")
.attr("fill","brown")
.text("LEAGUE OF STREAMERS");

g.append("text").attr("x", 270).attr("y", 28)                      
.attr("font-size","20px")
.attr("stroke","#1b8244")
.attr("font-family","Helvetica")
.attr("fill","#1b8244")
.text("(Follow on Twitch.tv)");

g.append("text").attr("x",300).attr("y",500)
.attr("dy","5.5em")
.attr("font-size","20px")  
.attr("stroke","teal")   
.attr("font-family","Helvetica")
.attr("fill","teal")
.text("Streamers");

g.append("text").attr("x",-350).attr("y",5)
.attr("dx","2em")
.attr("font-size","20px")
.attr("stroke","teal")   
.attr("fill","teal")
.attr("font-family","Helvetica")
.attr("transform","rotate(-90)")
.text("Stream Value");

g.append("text").attr("x", 220).attr("y", 650)                      
.attr("font-size","25px")
.attr("stroke","brown")
.attr("fill","brown")
.attr("font-family","Helvetica")
.text("GAMING COMMUNITY");

g.append("text").attr("x",-400).attr("y",700)
.attr("font-size","25px")
.attr("stroke","purple")   
.attr("fill","purple")
.attr("font-family","Helvetica")
.attr("transform","rotate(270)")
.text("Developed at Excelra");          

function onMouseOver(d, i){
d3.select(this).attr('class', 'highlight');
d3.select(this)
.transition() 
// .ease(easement)    
.duration(150)
.delay(100)
.attr("fill","#822b5b")
.attr('width', 43)               

console.log(bar);

g.append("text")            
.attr('x', xscale(d.streamer)+25)
.attr('y', function() {
 return yscale(d.streamval);
})
.attr("id","myText")
.text(function() {
 return (d.streamval);  
})            
.attr("stroke","teal")
.attr("fill","teal");  
          

g.append("circle")
.attr("cx", xscale(d.streamer)+30.5)
.attr("cy", function(){
    return yscale(d.streamval) - 5;
})    
.attr("r", 13)
.attr("id","myCircle")
.attr("stroke", "green") 
.attr("fill", "transparent")            
}


function onMouseOut(d,i){
d3.select(this).attr("class", "highlight")
.attr("x", xscale(d.streamer))
d3.select(this)
.transition()           
.duration(400)
.delay(100)
.attr("fill","#5f7510")
.attr("width",40)
d3.select("#myText").remove();
d3.select("#myCircle").remove();                               
}

d3.interval(function(){
    update(data);
    console.log("Streamers World");
}, 1000);

function update(data){

}

}

}
