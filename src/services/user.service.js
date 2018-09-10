import userList from "./user.data";
console.log(userList);
var addUser = user => {
  var check = userList.find(o => o.email === user.email);
  if (check) return null;
  userList.push(user);
  console.log(userList)
  return user;
};

var removeUser =email => {
  //console.log('delete request for',email)
  var index = userList.findIndex(o => o.email === email);
  if (index<0) return null;
  var user={...userList[index]}
  userList.splice(index, 1);
  console.log(userList)
  return user;
};
var getUser = (email, password) => {
   // console.log(userList);
   var index = userList.findIndex(o => o.email === email);

 
  if(index >= 0){
    //console.log(userList[index]);
      if(userList[index].password === password)
      return{...userList[index]};
      return null;
    }
  else return null;
};
var editUser = (user, newUser) => {
  var index = userList.findIndex(o => o.email === user.email);
  if (index<0) return null;
  userList[index]={...newUser};
  return user;
};
var getAllUsers=()=>userList
var UserService= {
    addUser,
    removeUser,
    editUser,
    getUser,
    getAllUsers
  };
export default UserService;
