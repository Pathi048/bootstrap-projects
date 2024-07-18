var obj1 = {
    name:"pathi",
    Age:20
}
console.log("data type:", typeof(obj1));
console.log("before adding palce & area:",obj1);
obj1.place="madurai"
obj1.area="thallakulam";
console.log("after adding place & area",obj1);
console.log("obj1 place value",obj1["place"]);

var obj=new Object();
obj.name = "pathi";
obj.age = 20;
obj.gender = "male";
console.log("before delete",obj);
delete obj["name"];
console.log("after delete",obj);
