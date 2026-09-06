 function marks(totalmarks)
 {
   let grade;

    if(totalmarks>60)
    {
        grade ="A"
    }
    else{

         if(totalmarks>50)
         {
            grade ="B"
         }
         else{
            if(totalmarks>40)
            {
                grade = "C"
            }
            else{
                gradde ="D"
            }
         }
    }
  console.log(grade)
 }

 marks(90)