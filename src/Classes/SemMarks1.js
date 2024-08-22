class SemMarks1 {
    static passMarks=35;

    static aboutPrasad=()=>{
console.log("Hi im Prasad i have completed my bachelors in 2023");
    }
    constructor (telMarks,engMarks,physMarks,computerMarks){
        this.engMarks =0;
        this.telMarks =0;
        this.physMarks =0;
        this.computerMarks =0;
       

    }
    calculateResult=()=>{
       
        if(this.computerMarks>=SemMarks1.passMarks && this.engMarks>=SemMarks1.passMarks && this.physMarks>=SemMarks1.passMarks && this.telMarks>=SemMarks1.passMarks){
console.log("student passed in semester")
        }else{
console.log("student failed in semester")
        }
    }
}
export default SemMarks1;