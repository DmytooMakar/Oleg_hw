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

// task 2

document.querySelector('#task2').onclick = function(){
    const AllNameAndStreet = arr.map(object =>({
            name: object.name,
            street: object.street
        }))
    console.log(AllNameAndStreet)
}

//task 3

document.querySelector('#task3').onclick = function (){
    const usersHaveCar = arr.filter(el => el.car ==='BMW' && !el.haveBusiness)
    console.log(usersHaveCar+ ' ВИПРАВИВ');
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
    let num = 1;
    const users = arr.forEach(user =>  console.log(num++ +' User is name '+ user.name))
    console.log(users)
}

//task 7

document.querySelector('#task7').onclick = function(){
    const sortForAge = arr.reduce((acc, user) => acc<user.age?acc = user.age:acc , 0);
    console.log(sortForAge+ ' Вгадав')
}

//task 8 

document.querySelector('#task8').onclick = function(){
    const countCar = arr.reduce((acc, user) => acc += user.car === 'BMW', 0)
    console.log('Users have BMW '+ countCar)
}

//task 9

document.querySelector('#task9').onclick = function(){
    console.log('ПІДГЛЯНУВ');
    const countCar = arr.reduce((acm, user) => { 
        if(!acm[user.car]){
            acm[user.car] = 1;
        } else {
            acm[user.car] = acm[user.car]+ 1;
        }   
        return acm;
    } , {})
    console.log(countCar)
}

//task 10 

document.querySelector('#task10').onclick = function(){
    const arrOfNumbers = [4, 2, 4, 7, 8, 4, 6, 2, 1, 3, 4, 7, 4, 5, 9, 3, 5, 1];
    const resultArr = arrOfNumbers.reduce((acc, num)=> {if(!acc[num]){
        acc[num] = 1;
    } else {
        acc[num] = acc[num]+ 1;
    }   
    return acc;}
    , {})
    console.log(resultArr+ ' ПІДГЛЯНУВ')
}

//task 11

document.querySelector('#task11').onclick = function(){
    const arrOfImages = ['Mercedes_Photo', 'Audi_Photo', 'BMW_Photo', 'Ferrari_Photo', 'Porche_Photo'];
    console.log(arrOfImages);
    setInterval(() => {
        let firstEl = arrOfImages.shift();
        arrOfImages.push(firstEl);
        console.log(arrOfImages);  
    }, 5000);
}

//task 12

document.querySelector('#task12').onclick = function(){
    let hour = 23;
        let minutes = 59;
        let seconds = 55;
        console.log('криво працює')
    setInterval(() => {
        seconds += 1
        if (seconds === 0) {
            seconds += 1
        }   else if(seconds === 60){
            seconds = 00;
            minutes += 1
        }   else if (minutes===59&&seconds === 59){
            minutes = 00;
            seconds = 00;
            hour += 1
        }   else if (hour === 24){
            hour =00;
            minutes = 00;
            seconds = 00
        }
        console.log(hour+':'+minutes+':'+seconds)
    }, 1000);
}