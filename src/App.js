import logo from './logo.svg';
import './App.css';
import SemMarks1 from './Classes/SemMarks1';


function App() {

  let prasad = new SemMarks1();
prasad.engMarks = 95;
prasad.telMarks = 92;
prasad.physMarks =99;
prasad.computerMarks =88;

console.log(SemMarks1.passMarks)
SemMarks1.aboutPrasad();

prasad.calculateResult();


 let namesOfBikes=[
   "Rx100","Kawasaki","Ninja200","Bmw","Hero","Duke","KTM","Honda","Xlsuper100","Yamaha","Rx100","Splender+","Ducati","Suzuki","BajajPulusar","Royalenfield"
 ]
  return (
    <div className="App">
      <h2>Bike Names in Array Methods</h2>
<div>      <button type="button" onClick ={()=>{
      console.log(namesOfBikes.length)
      for(let i=0;i< namesOfBikes.length;i++){
        console.log(namesOfBikes[i]);
      }
      // console.log(namesOfBikes[7]);
      // console.log(namesOfBikes[6]);
      // console.log(namesOfBikes[5]);
      // console.log(namesOfBikes[4]);
      }}>Length</button></div>
<div>      <button type="button" onClick ={()=>{
        //  console.log(namesOfBikes.length)
         for(let i=0;i< namesOfBikes.length;i++){
           console.log(namesOfBikes.at(i));
         }


      }}>at</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes.toString());
        

      }}>toString</button></div>
     <div> <button type="button" onClick ={()=>{
        console.log(namesOfBikes.join(" @ "));
      }}>join</button></div>
      {/* <button type="button" onClick ={()=>{

        console.log(namesOfBikes);
        delete namesOfBikes[5];
        console.log(namesOfBikes);
      }}>Delete</button> */}
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.pop());
        console.log(namesOfBikes);
        



      }}>pop</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.shift());
        console.log(namesOfBikes)
      }}>Shift</button></div>
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.push("Ampere","Aprilia"));
        console.log(namesOfBikes);

      }}>Push</button></div>
      
   <div>   <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.unshift("Vesepa","Ultraviolette"));
        console.log(namesOfBikes);

      }}>unshift</button></div>
      
<div>      <button type="button" onClick ={()=>{
        console.log(namesOfBikes);
        console.log(namesOfBikes.splice(0,0,"Tork","Okaya"));
        console.log(namesOfBikes);
        console.log(namesOfBikes.splice(4,2))
        console.log(namesOfBikes);
      }}>Splice</button></div>
      <div>
        <button type="button" onClick ={()=>{
          let cars =["Maruti","Hundyai","Kia"];
          let bikes =["Jawa","Royal Enfield","Apache"]

          let vehicles = cars.concat(bikes);
           
          let vehicles2 =[...cars,...bikes];
          console.log(cars);
          console.log(bikes);
          console.log(vehicles);
          console.log(vehicles2);
        }}>Concat</button>

      </div>
      <div>
        <button type="button" onClick ={()=>{
          let tataCompanyCars = ["Safari","Tata Avinya","Nexon","Tata Punch",["Tata Tigor","Hrithik Roshan"]];

          let mahindraCompanyCars = [["Mahindra Thar","RamaKripa Anthan"],"Mahindra Bolero","Mahindra Scropio","Mahindra XUV700"];

          let toyotaCompanyCars = ["Camry",["Fortuner","Ayushmann Khurrana "],"Vellfire","Hilux"];

          let topCompanycars = [tataCompanyCars,mahindraCompanyCars,toyotaCompanyCars];
          let topCompanycars2 = topCompanycars.flat(2);
             console.log(topCompanycars);
             console.log(topCompanycars2);

             
        }}>Flat</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          
           let sliced = namesOfBikes.slice(2,13);
           console.log(namesOfBikes);
           console.log(sliced);
        }}>Slice</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          let newOne = namesOfBikes.fill("Activa 6g",0,3);

           console.log(newOne);
        }}>Fill</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          console.log(Array.from("I don't know who you are"));
        }}>From</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
            console.log(namesOfBikes.includes("tanker"));
            console.log(namesOfBikes.includes("KTM"));
        }}>Includes</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          console.log(namesOfBikes.indexOf("Rx100"));
          console.log(namesOfBikes.indexOf("Bullet"));
        }}> Index of</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          console.log(namesOfBikes.indexOf("Rx100"));
          console.log(namesOfBikes.lastIndexOf("Rx100"));
        }}>Last indexof</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          console.log(namesOfBikes);
          namesOfBikes.reverse();
          console.log(namesOfBikes);

        }}>Reverse</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
        console.log (Array.isArray("it was me"));
        console.log (Array.isArray(true));
        console.log (Array.isArray(12345));
        console.log (Array.isArray([2,4,55,5,8]));
        }}>Is array</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{
          namesOfBikes.forEach((ele,i)=>{
            console.log(`${i}...--__------>${ele}`);
            // console.log("These are all Top Brand vehicles");
          })
        }}>For each</button>
      </div>
      <div>
        <button type="button" onClick ={()=>{}}></button>
      </div>
    </div>
  );
}

export default App;
