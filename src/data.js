let questionsData;
if(localStorage.getItem("questionsItems") !==null){
    questionsData=JSON.parse(localStorage.getItem("questionsItems"))
}else{
    questionsData=[]
}

export default questionsData 