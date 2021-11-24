
// 1er page (entrer les infos)

function animation(){
    setTimeout(function(){
        document.getElementById('section1').innerHTML="";
        
   }, 2000);
   setTimeout(function(){
    
    document.getElementById('section1').innerHTML=`<form>
    <div class="col-lg-6 col-md-8 col-sm-10 total">
       
            <div class="form-row">
                <div class="col-md-6 nomsujet">
                    <label asp-for="Fromnom" class="control-label">NOM</label>
                    <input asp-for="Fromnom" class="form-control" type="text" id="nom" />
                
                    <label asp-for="Fromsujet" class="control-label">SUJET</label>
                    <input asp-for="Fromsujet" class="form-control" type="text" id="sujet"/>

                 </div>
           </div>
            <div class="buttonajouter">
                <button type="button" class="g-recaptcha btn btn-primary" id="submit" onclick="ajouter()">Ajouter</button>
            </div>
                
                   
                
                <div class="col-md-6 area">
                    <label asp-for="Message" class="control-label"></label>
                    <textarea asp-for="Message" class="form-control" cols="6" rows="10" id="table1"></textarea>
                  
                </div>
          
               
            
       
</div>
</form>

<div>
                          
<div class="divrandem">
<button type="button" class="g-recaptcha btn btn-success  buttonrandem" id="submit" onclick="animationrandem()" >Randem</button>
</div>

<div class="col-md-6 datesujet">

<label asp-for="Fromdate" class="control-label">DATE DEBUT SUJET</label>
<input asp-for="Fromdate" class="form-control" type="date" id="datedebut" />

</div>


</div>


`;
}, 2500);

}

// reteur 1er animation

function reteur(){
       
            document.getElementById('section1').innerHTML="";
            document.getElementById('section1').innerHTML=`<div class="circle">
            LOADING
            <span></span>
        </div>
    
        <div class="circle1">
            <span></span>
        </div>
    
        `; 

        animation();
}


// animation circle randem et remplisage table resultat

function animationrandem(){
    var date=document.getElementById('datedebut').value;
    if(array==""){
        alert("ajouter des personnes avec des sujets");
    }else{
        if(date==""){
            alert("choisir votre date debut de 1er sujet");
        }else{
    randem();
        document.getElementById('section1').innerHTML="";
        document.getElementById('section1').innerHTML=`<div class="spinrandom">
        <button id="spin">Start</button>
        <span class="arrow"> </span>
        <div class="container">
          <div class="un"></div>
          <div class="deux"></div>
          <div class="troi"></div>
          <div class="quatre"></div>
          <div class="cinq"></div>
          <div class="six"></div>
          <div class="sept"></div>
          <div class="huit"></div>
         
        </div>
      </div>`

      setTimeout(function(){
        document.getElementById('section1').innerHTML="";
        document.getElementById('section1').innerHTML=`<table class="table table-striped table-dark tablefinal" id="tablefinal" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NOM</th>
            <th scope="col">SUJET</th>
            <th scope="col">DATE SUJET</th>
          </tr>
        </thead>
        <tbody id="tableresult">
       
        </tbody>

        <tfooter>
        <tr> 
            <td colspan="2">
             
            </td>

            <td colspan="2">
               
            </td>
     </tr>
     
     </tfooter>
      </table>

      <center>
      <div >
              <button type="button" class="g-recaptcha btn btn-danger  btnreteur" id="submit" onclick="reteur()" >RETEUR</button>
      </div>
     </center>


    
     <div >
     <button type="button" class="g-recaptcha btn btn-info  btndanwload" id="submit" onclick="convert('xlsx','fichier1')" >DAWNLOAD</button>
     </div>


      `;
      var table=document.getElementById("tableresult");
      for(var i=0;i<arrayfinal.length;i++){
        var NewRow = table.insertRow();
        var cel1 = NewRow.insertCell();
        var cel2 = NewRow.insertCell();
        var cel3 = NewRow.insertCell();
        var cel4 = NewRow.insertCell();

        cel1.innerHTML=i+1;
        cel2.innerHTML=arrayfinal[i].nom;
        cel3.innerHTML=arrayfinal[i].sujet;
        cel4.innerHTML=arrayfinal[i].date;
      }

   }, 7900);
}
}
}



// declaration les table (declaration global)
var array=[];
var arrayfinal=[];


// pour ajouter des personnes avec des sujets
function ajouter(){
        var Nom=document.getElementById('nom');
        var Sujet=document.getElementById('sujet');

        document.getElementById('table1').innerHTML+= "NOM :  " +Nom.value +"                    "+ "SUJET :    "+Sujet.value+"\n";   

        array.push({
            nom:Nom.value,
            sujet:Sujet.value
          
        });

        Nom.value="";
        Sujet.value="";

}



// pour randem 1er table
function entierAleatoire(d)
{
   
    min=0;
   
    max=array.length;
   
 var a= Math.floor(Math.random() * (max - min + 1)) + min;
 

 if(a<max){

    arrayfinal.push({
        nom:array[a].nom,
        sujet:array[a].sujet,
        date:new Date(d).toLocaleDateString()

    });



 

array.splice(a,1);

return 0;

}else{

return 1;

}

}



// fonctionner  function randem 

function randem(){
  var datedebut= document.getElementById('datedebut').value;
  var date=new Date(datedebut);

    while(array.length!=0){
      if(date.getDay()==6){
        date.setDate(date.getDate()+2);
      } 
     
       var res= entierAleatoire(date);
    
       if(res==0){
           
        date.setDate(date.getDate()+1);
       }
    }

}
  

// convert table html en fichier excel

function convert(fe,fn){
    var elt = document.getElementById('tablefinal');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return XLSX.writeFile(wb,fn+"."+fe ||("filename."+(fe||'xlsx')));
}



 


