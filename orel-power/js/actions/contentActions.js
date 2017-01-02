const riddles = [
     {
        question: "כמה זה 6 בחזקת 2?",
        answer: "36",
        },
   {
        question: "כמה זה 10 בחזקת 5?",
        answer: "100000",
        },

        {
        question: "כמה זה 5 בחזקת 3, פלוס 2?",
        answer: "127",
        },
   {
        question: "כמה זה 3 בחזקת 3?",
        answer: "27",
        },
   {
        question: "כמה זה7 בחזקת 4, פחות 5?",
        answer: "2396",
        },
   {
        question: "מה ההפך של חזקות?",
        answer: "שורש",
        },
   {
        question: "כמה זה 4 בחזקת 5, כפול 2?",
        answer: "2048",
        },
   {
        question: "כמה זה 6 בחזקת 9, כפול 0",
        answer: "0",
        },
   {
        question: "מה שם המספר שלמעלה בחזקה ?",
        answer: "מעריך",
        },
   {
         question: "מה שם המספר שלמטה בספרה?",
        answer: "בסיס",
        },
  
        ];

export function getAllRiddles() {
    return {
        type: "GET_ALL_RIDDLES_SUCCESS",
        riddles,
    };
};
        
        


