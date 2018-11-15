let name = 'Snow';
let age = 4;
let isSterilized = true;
//ไม่ใช้thisใช้ narrow fn
const petInfo = (petName,petAge,petSterilize) => {
    
    return (
        'Pet name is '+ 
        petName+
        ', age is' +
        petAge +
        ' and pet is sterilized: ' + 
        petSterilize
    );
}

console.log(petInfo(name,age,isSterilized));


const pet = {
    name:'Snow',
    age:4,
    //ใช้ this ใช้ fn ปกติ
    info(){
        console.log(this.name+'is'+this.age+'years');
        
    }

}
pet.info();

//array
const pets= ['Stamp','Snow'];
console.log(pets);
for (let pet of pets){
    console.log(pet);
}

//เอาแอแรไปเปลี่ยนแปลง
const mapPets = pets.map( (pet)=> {
    return 'Name is'+ pet

})

console.log(mapPets);

//กรอง
const filPet = pets.filter( (pet)=> {
    return pet.length >4;

})

console.log(filPet);


const newPets =[...pets];
console.log(newPets);

const newPet ={...pet, gender:'male'};
console.log(newPet);

function toArray(...args){
    return args;
}

console.log(toArray(1,2,3,4,5,6,7,8,9));


const pao ={
    name : 'PAo',
    age:4

}

const printName = ({name}) => {


}


//callback promise awaitasync
