pragma solidity ^0.4.2;
contract PostProject{
    string ProjectName;
    string ProjectType;
    function PostProject (string _name , string _type){
        ProjectName = _name;
        ProjectType = _type;
    }

    
}