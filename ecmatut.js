try{
    if(true){

        let x = 10;
    
        document.write("x = " + x + "<br/>");
    
        for(let i = 0; i < 2; i ++){
            document.write("i = " + i + "<br/>");
        }
    
    }
    
    document.write("x = " + x + "<br/>");
}catch (e) {
    document.write(e);
}



var y = 'i am global variable';

if(true){

    let y = 'i am a local variable';
    doument.write(y);

}

document.write(y)