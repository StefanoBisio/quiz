
$.getJSON('https://opentdb.com/api.php?amount=50&category=11&type=multiple',
    function (data) {
    
            /* This will be used to select a random JSON result */
            var rand = Math.floor(Math.random() * 50) + 1;
    
            /* Making an array out of one JSON result*/
            var qa = [
                data.results[ rand ].correct_answer,
                data.results[ rand ].incorrect_answers["0"],
                data.results[ rand ].incorrect_answers["1"],
                data.results[ rand ].incorrect_answers["2"]];
    
            /* Shuffling array*/
            function shuffle(arra1) {
            var ctr = arra1.length, temp, index;

        // While there are elements in the array
            while (ctr > 0) {
        // Pick a random index
                index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
                ctr--;
        // And swap the last element with it
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1;
        }
            var instance = shuffle(qa);            
            
            /* Adding correct answer on top, for correct answer check */
            instance.unshift(data.results[ rand ].correct_answer);

            /* Adding question on top.
            /* We now have an array that contains, in order:
                the question
                the correct answer
                the 4 possibilities */
            instance.unshift(data.results[ rand ].question);
            
            /* Writing question */
            $('#question').html(instance[0]);
            
            /* Writing questions */
            $('#q1').html(instance[2]);
            $('#q2').html(instance[3]);
            $('#q3').html(instance[4]);
            $('#q4').html(instance[5]);
            
            $('.questions').click(function(){
            choice = $(this).text("clicked");
            });
            
  });
