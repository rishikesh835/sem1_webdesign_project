const user={
    "rishikeshmishra835@gmail.com":'password',
    "ratnamojha82@gmail.com":'@12345678@',
    "bunty07@gmail.com":'solana@123',
    "yuvraj897@gmail.com":'yuvraj@123'
}
const userMap=new Map([
    ["rishikeshmishra835@gmail.com",'password'],
    ["ratnamojha82@gmail.com",'@12345678@'],
    ["bunty07@gmail.com",'solana@123'],
    ["yuvraj897@gmail.com",'yuvraj@123]']

]);

// console.log(userMap.has('bunty07@gmail.com'))
function validate(){
    if(userMap.has(username)){
        if(password === user.username){
            alert("logged in successfully")
            window.location.href('index.html');
        }
        else{
            return "password incorrect"
        }
    }
    return "incorrect username"
}