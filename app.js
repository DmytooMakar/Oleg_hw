const arr = [
    {
        name: 'Oleh',
        age: 18,
        street: 'Street One',
        car: 'BMW',
        haveBusiness: false
    },
    {
        name: 'Dima',
        age: 20,
        street: 'Street Three',
        car: 'Mercedes',
        haveBusiness: true
    },
    {
        name: 'Maksim',
        age: 15,
        street: 'Street Four',
        car: 'BMW',
        haveBusiness: true
    },
    {
        name: 'Vasyl',
        age: 25,
        street: 'Street Ten',
        car: 'Audi',
        haveBusiness: false
    },
    {
        name: 'Misha',
        age: 18,
        street: 'Street Two',
        car: 'Mercedes',
        haveBusiness: false
    },
    {
        name: 'Sasha',
        age: 21,
        street: 'Street Two',
        car: 'BMW',
        haveBusiness: false
    },
];

console.log(arr);

// task 1

document.querySelector('#task1').onclick = function(){
    const filterAge = arr.filter(object => object.age >= 20);
    console.log(filterAge)
} 

// tast 2

document.querySelector('#task2').onclick = function(){
    const AllNameAndStreet = arr.map(object =>({
            name: object.name,
            street: object.street
        }))
    console.log(AllNameAndStreet)
}

//task 3

document.querySelector('#task3').onclick = function (){
    const usersHaveCar = arr.filter(el => {
       return el.car ==='BMW', 
       el.haveBusiness === false
    })
    console.log(usersHaveCar);
}

//task 4

document.querySelector('#task4').onclick = function(){
    const sortForAge = arr.sort((a, b) => {
        return a.age-b.age;
    })
    console.log(sortForAge);
}

//task 5

document.querySelector('#task5').onclick = function(){
    const summaAge = arr.reduce((acc, user) => acc + user.age,0)
    console.log(summaAge)
}

//task 6

document.querySelector('#task6').onclick = function(){
    console.log('Не зрозумів того завданняб, тому тримай')
    for(let item of arr){
        console.log(item.name)
    }
}

//task 7

document.querySelector('#task7').onclick = function(){
    const sortForAge = arr.sort((a, b) => {
        return b.age-a.age;
    })
    console.log(sortForAge[0]);
}

//task 8 

document.querySelector('#task8').onclick = function(){
    const countCar = arr.map(object =>({
        car: object.car,
    })).filter(user => user.car === 'BMW')
        
    console.log(countCar.length)
}

//task 9

document.querySelector('#task9').onclick = function(){
    const countCar = arr.map(object =>({
        car: object.car,
    })).filter(user => user.car === 'BMW')

    console.log({BMW: countCar.length})
}

//task 10 

document.querySelector('#task10').onclick = function(){
    const result =
    const arrOfNumbers = [4, 2, 4, 7, 8, 4, 6, 2, 1, 3, 4, 7, 4, 5, 9, 3, 5, 1];
    const countArrayIndex = arrOfNumbers.length;
    let sortArray = arrOfNumbers.sort((a, b)=> a - b);
    console.log(sortArray);
    for(let item=0;item<countArrayIndex;item++){
        const number = sortArray.filter( number => number === item);
        sortArray.splice(0, number.length);
          
    }
}