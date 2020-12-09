var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element

  id: 'be.burhanatesalp.Shredder', // App bundle ID
  name: 'Shredder', // App name
  theme: 'auto', // Automatic theme detection

  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
         
      homeWorkouts: [{
          id: '1',
          title: 'Full Body',
          exercises: 
          [
            {
            nr: '1',
            name: 'Diamond Push-Ups',
            description: 'Here we will use narrow grip push-ups. Here, your hands will be placed in a diamond shape. This better targets the chest and triceps. 2 of these sets will be performed on a flat surface to emphasize the whole chest. 2 of these sets should be performed in a decline with your feet elevated and your hands positioned forward more towards your face. This shifts more emphasis to the upper chest. That’s because it now incorporates more shoulder flexion (one of the main functions of the upper chest) into the push-up.',
            advanced: 'You can simply stuff a bag with books and strap it onto your back to gradually increase the load. You can also use a band to add more resistance as well.',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',              
          },
          {
            nr: '2',
            name: 'Inverted Row',
            description: 'Most of the emphasis will be on the mid-back for thickness. Ideally, for the most resistance, you should use a broom or mop and place that between two chairs to perform your row. If you don’t have the right setup for that though, then you can simply perform these under a sturdy table. You can start out with bent knees to use your legs for support. A third option is the following set up instead which we’ll continue to use later on in this workout: Simply take 2 bed sheets or towels, Tie a basic knot at the end of each of them and then throw it over your door and close your door',
            advanced: 'Getting your body more horizontal to the ground by elevating your feet and adding more load with the use of a backpack stuffed with books will let you progress',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',          
          },
          {
            nr: '3',
            name: 'Pike Push-ups',
            description: 'You can start them out on the ground by assuming a pushup position and then moving your hands closer to your feet while keeping your legs straight. Your body should now make an upside-down V shape. Then, bend your elbows and lower your upper body until the top of your nose nearly touches the floor. Your head should move forward past your hands as you reach the bottom position and then your head should return to between your hands at the top position. Just like with the overhead press, your elbows should not flare out sideways. Keep them tucked and vertical over your wrists as you descend.',
            advanced: 'You can first simply elevate your feet up to the edge of a platform. To progress this even further, you can move your hands closer to the feet. This will make the movement considerably harder. And then, again, repeat the process of elevating your feet onto a higher platform once you’re ready. I’d recommend marking down with tape how far your hands are from the platform so that you’re able to accurately gauge your progress over time.',
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',         
          },
          {
            nr: '4',
            name: 'Sliding Lat Pulldowns',
            description: 'It’s time to target the back (primarily the lats). We’ll do so with a vertical pulling angle, rather than horizontal, as we did earlier. This one is bound to get you weird looks around the house. But is worth it for the return in back gains in provides. Simply lay on a smooth surface and use something for grip on your hands, like shoes, for example. Then, you simply perform a lat pulldown motion by pulling your elbows down to slide your body up. You should feel your lats working as you do so.',
            advanced: 'You can add weight with a backpack. Provide additional resistance by pressing your feet into the ground as you perform your reps',
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',          
          },
          {
            nr: '5',
            name: 'Bicep bed sheet curls',
            description: 'Go back to your bed sheet or towel setup and lean back with your arms straight. Then, keeping your body straight and elbows locked in position, curl your hands towards your face by using your biceps.',
            advanced: 'Buy a dumbell.',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',      
          },
          {
            nr: '6',
            name: 'Tricep overhead extensions',
            description: 'To target the long head of the triceps which has yet to be emphasized in this workout, you can simply switch over and perform tricep extensions. Again, you want to keep that elbow locked in place. And your body in a straight line. Alternatively, these can also be done like so on an elevated platform.',
            advanced: 'Orienting your body to be more horizontal to the ground. Transitioning to just one arm at a time, and/or adding weight by using a backpack',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',         
          },
          {
            nr: '7',
            name: 'Assisted Pistol Squats',
            description: 'It’s time to move onto the lower body. And for most of us, bodyweight squats just aren’t going to cut it. Which is why we’ll use the bed sheet set up again to perform assisted pistol squats. This exercise will help to target the quads and glutes. To perform these: Lean back with your arm straight, and then lift one leg off the ground. Then, simply squat down. Finish your reps on one leg before proceeding to the other leg. At first, you can use your arms to pull yourself up for assistance if needed.',
            advanced: 'Relying less and less on the assistance of your arms during the movement or transitioning to doing this same movement but stopping the range of motion short by sitting on an elevated platform and gradually reducing the height of this',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',          
          },
          {
            nr: '8',
            name: 'Bulgarian Split Squat',
            description: 'This is an exercise you’re probably familiar with: the Bulgarian split squat. With your rear leg elevated on a platform, this exercise will again further target the quads and glutes.',
            advanced: 'To progress this, you can simply hold a weighted backpack at your chest. Once that gets too easy though, a more difficult progression is the assisted shrimp squat: Use the side of a counter for assistance and hold one leg behind you with the same arm. Then, squat down until your knee just about touches the floor and come back up with assistance from the counter as needed. Over time, you can progress these by moving off of the counter',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',                    
          },
          {
            nr: '9',
            name: 'Sliding Hamstring Curls',
            description: 'Here we’ll use the sliding leg curl. This exercise will help work the hamstrings through both hip and knee extension. To perform these: Simply lay on a smooth surface and place your feet on two or something that will enable them to slide easily. Then, use your hamstrings to curl your heels in towards you while raising your hips up into the air. Your back should remain straight as you do so.',
            advanced: 'To progress this, you can slow down the tempo and/or perform them with one leg at a time.',
            sets: '4',
            reps: 'Max reps',
            rest: '45 sec',                    
          },
        ]
        },
        {
          id: '2',
          title: 'Chest',
          exercises: 
          [
            {
            nr: '1',
            name: 'Diamond Push-Ups',
            description: 'Here we will use narrow grip push-ups. Here, your hands will be placed in a diamond shape. This better targets the chest and triceps. 2 of these sets will be performed on a flat surface to emphasize the whole chest. 2 of these sets should be performed in a decline with your feet elevated and your hands positioned forward more towards your face. This shifts more emphasis to the upper chest. That’s because it now incorporates more shoulder flexion (one of the main functions of the upper chest) into the push-up.',
            advanced: 'To progress this, you can slow down the tempo and/or you can simply stuff a bag with books and strap it onto your back to gradually increase the load.',          
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',
          },
          {
            nr: '2',
            name: 'Wide Press-up',
            description: 'Perform a standard press-up, but with your hands placed wider than shoulder-width apart.',
            advanced: 'To progress this, you can slow down the tempo and/or you can simply stuff a bag with books and strap it onto your back to gradually increase the load.',
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',
          },
          {
            nr: '3',
            name: 'Incline Push-up',
            description: 'Incline push-ups make the traditional move slightly easier by elevating your hands, which changes the plane you’re moving your body from. This gives you more leverage, and lightens the load that you have to lift each time you physically push your chest up. “Instead of having both your hands and feet grounded on the floor, in an incline push-up, your hands are planted on an elevated surface, such as a box step, weight bench, stair steps, countertop, or racked barbell',
            advanced: 'To progress this, you can slow down the tempo and/or you can simply stuff a bag with books and strap it onto your back to gradually increase the load.',
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',
          },
          {
            nr: '4',
            name: 'Decline Push-up',
            description: 'A decline pushup is an advanced variation of the basic pushup that increases the difficulty significantly by placing your feet higher than your hands. Adjusting the bench height allows you to customize the intensity of your workout using just your body weight. All you need is a bench, step, or some other solid object you can rest your feet on.',
            advanced: 'To progress this, you can slow down the tempo and/or you can simply stuff a bag with books and strap it onto your back to gradually increase the load.',
            sets: '3',
            reps: 'Max reps',
            rest: '45 sec',
          },
        ]
        },
        {
          id: '3',
          title: 'Leg',
          exercises:
          [
            {
              nr: '1',
              name: 'Squat',
              description: 'Stand with your feet hip-width apart. Keeping your chest up and back straight throughout, bend your knees and lower, pushing your hips back until your thighs are parallel to the ground. Then drive through your heels to return to standing.',
              advanced: 'To progress this, you can slow down the tempo and/or you can simply stuff a bag with books and strap it onto your back to gradually increase the load.',
              sets: '3',
              reps: 'Max reps',
              rest: '45 sec',  
            },
            {
              nr: '2',
              name: 'Assisted Pistol Squats',
              description: 'It’s time to move onto the lower body. And for most of us, bodyweight squats just aren’t going to cut it. Which is why we’ll use the bed sheet set up again to perform assisted pistol squats. This exercise will help to target the quads and glutes. To perform these: Lean back with your arm straight, and then lift one leg off the ground. Then, simply squat down. Finish your reps on one leg before proceeding to the other leg. At first, you can use your arms to pull yourself up for assistance if needed.',
              advanced: 'Relying less and less on the assistance of your arms during the movement or transitioning to doing this same movement but stopping the range of motion short by sitting on an elevated platform and gradually reducing the height of this',
              sets: '4',
              reps: 'Max reps',
              rest: '45 sec',
            },
            {
              nr: '3',
              name: 'Bulgarian Split Squat',
              description: 'This is an exercise you’re probably familiar with: the Bulgarian split squat. With your rear leg elevated on a platform, this exercise will again further target the quads and glutes.',
              advanced: 'To progress this, you can simply hold a weighted backpack at your chest. Once that gets too easy though, a more difficult progression is the assisted shrimp squat: Use the side of a counter for assistance and hold one leg behind you with the same arm. Then, squat down until your knee just about touches the floor and come back up with assistance from the counter as needed. Over time, you can progress these by moving off of the counter',
              sets: '4',
              reps: 'Max reps',
              rest: '45 sec',         
            },
            {
              nr: '4',
              name: 'Sliding Hamstring Curls',
              description: 'Here we’ll use the sliding leg curl. This exercise will help work the hamstrings through both hip and knee extension. To perform these: Simply lay on a smooth surface and place your feet on two or something that will enable them to slide easily. Then, use your hamstrings to curl your heels in towards you while raising your hips up into the air. Your back should remain straight as you do so.',
              advanced: 'To progress this, you can slow down the tempo and/or perform them with one leg at a time.',
              sets: '4',
              reps: 'Max reps',
              rest: '45 sec',                     
            },
          ]
        },
        {
          id: '4',
          title: 'Abs',
          exercises: 
          [
            {
              nr: '1',
              name: 'Hardstyle plank',
              description: 'Lying face down on the ground, prop yourself up into a forearm plank position. Make sure your elbows are aligned underneath your shoulders, and that your hands are balled up in fists. Your forearms should be parallel to one another.',
              sets: '3',
              repetitions: 'Hold on as long as you can.',
              rest: '30 sec'
            },
            {
              nr: '2',
              name: 'Dead bug',
              description: 'Lay face up on the floor with arms straight above your shoulders. To start, bring your knees directly over your hips and bend at the knee so that your calf forms a 90-degree angle with your thigh. Next, simultaneously lower your left arm above your head while straightening your right leg and sending it towards the floor. Pause, return to the starting position, and then repeat on the opposite side.',
              sets: '3',
              repetitions: '14',
              rest: '30 sec'
            },
            {
              nr: '3',
              name: 'Hollow extension-to-cannonball',
              description: 'Get into a cannonball-type shape on your back, hugging your knees into your chest—yes, just like you’re at the pool at summer camp again. Simultaneously extend your legs and arms outwards into a “hollow” position, pressing your lower back to the floor. Hold for five seconds before curling up again',
              sets: '3',
              repetitions: '8',
              rest: '30 sec'
            },
            {
              nr: '4',
              name: 'Dumbbell side bend',
              description: 'Stand with your feet hip-width apart and hold a dumbbell in your right hand, palm facing inwards towards the torso. Keep your back straight, activate your core, and then bend to the side as far as possible—but only at the waist. Hold for one second at the bottom of your range of motion, and return to start for one rep.',
              sets: '3',
              repetitions: '20',
              rest: '45 sec'
            },
            {
              nr: '5',
              name: 'Bird dog',
              description: 'Think of this as an upside-down dead bug. Start in a tabletop position, with your shoulders over wrists and hips over knees. Engage your core while simultaneously lifting your right arm and left leg. Your foot should be flexed as you kick back, and your palm should face in towards your body. Pause for one second when your arm and leg are at the same height as your torso, and then bring your elbow and knee to touch underneath the body.',
              sets: '3',
              repetitions: '5',
              rest: '30 sec'
            },
          ]
        },
      ],
      fitnessWorkouts: [{
          id: '1',
          title: 'Chest',
          exercises: [{
              nr: '1',
              name: 'Close-Grip Bench Press',
              description: 'Lie back on a flat bench. Using a close grip (shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. As you breathe in, come down slowly until you feel the bar on your middle chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.',
              sets: '5',
              reps: '10',
              rest: '60 sec'
            },
            {
              nr: '2',
              name: 'Dumbbell Pull-Over',
              description: 'Place a dumbbell standing up on a flat bench. Ensuring that the dumbbell stays securely placed at the top of the bench, lie perpendicular to the bench (torso across it as in forming a cross) with only your shoulders lying on the surface. Hips should be below the bench and legs bent with feet firmly on the floor. The head will be off the bench too. Grasp the dumbbell with both hands and hold it straight over your chest at arms length. Both palms pressing against the underside one of the sides of the dumbbell. While keeping your arms straight, lower the weight slowly in an arc behind your head while breathing in until you feel a stretch on the chest. Bring the dumbbell back to the starting position using the arc through which the weight was lowered and exhale as you perform this movement. Hold the weight on the initial position for a second and repeat the motion for the prescribed number of repetitions',
              sets: '5',
              reps: '10',
              rest: '60 sec'
            },
            {
              nr: '3',
              name: 'Incline Dumbbell Bench Press',
              description: 'Lie back on an incline bench with a dumbbell in each hand on your thighs. The palms of your hands facing each other. Using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. Keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, then start slowly lowering the weight. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor.',
              sets: '4',
              reps: '12',
              rest: '30 sec'
            },
            {
              nr: '4',
              name: 'Incline Dumbbell Flye',
              description: 'Hold a dumbbell on each hand and lie on an incline bench that is set to an incline angle of no more than 30 degrees. Extend your arms above you with a slight bend at the elbows. Rotate the wrists so that the palms of your hands are facing you. Breathe in and start to slowly lower the arms to the side while keeping the arms extended and rotating the wrists until the palms of the hand are facing each other. As you exhale start to bring the dumbbells back up to the starting position by reversing the motion and rotating the hands so that the pinky fingers are next to each other. Repeat for the recommended amount of repetitions.',
              sets: '4',
              reps: '12',
              rest: '60 sec'
            },
            {
              nr: '5',
              name: 'Standing Cable Flye',
              description: 'Place the pulleys on a high position (above your head), select the resistance to be used and hold the pulleys in each hand. Step forward in front of an imaginary straight line between both pulleys while pulling your arms together in front of you. Your torso should have a small forward bend from the waist. With a slight bend on your elbows, extend your arms to the side (straight out at both sides) in a wide arc until you feel a stretch on your chest, breathe in. Return your arms back to the starting position as you breathe out. Make sure to use the same arc of motion used to lower the weights. Hold for a second at the starting position and repeat the movement for the prescribed amount of repetitions.',
              sets: '3',
              reps: '15',
              rest: '30 sec'
            },
          ]
        },
        {
          id: '2',
          title: 'Leg',
          exercises: [{
              nr: '1',
              name: 'Barbell Squat',
              description: 'Make a hip-width stance with your toes facing slightly outward. Support the barbell on the top of your trap muscles, chest up, and head facing forward. Bend your knees slowly, while driving them outward and keeping your back straightened. Hinge your hips and your knees will move forward. Make sure the bar moves in a straight line up and down. Slowly keep the weight on your heels and push up to go back to your initial position.',
              sets: '4',
              repetitions: '10',
              rest: '60 sec'
            },
            {
              nr: '2',
              name: 'Leg Press',
              description: 'Set the weight then sit on the machine placing your feet (shoulder width) on the footplate in front of you. Make sure to press your back firmly against the backrest. To start, lower the footplate’s safety bar and press all the way up so that your legs are fully extended creating a 90-degree with your torso and legs. Remember to keep the knees bent slightly when extended to avoid injuries or accidents. Slowly lower the footplate as you inhale to make a 90-degree angle with your upper and lower legs. Place the weight on your heels and push the plate back to your starting position. Finish your reps, and don’t forget to lock the safety pins after. Tip: Put your feet up higher on the footplate to work your hams and glutes. Make sure your hands are always on the safety bars for your own protection.',
              sets: '4',
              repetitions: '10',
              rest: '60 sec'
            },
            {
              nr: '3',
              name: 'Dumbbell Walking Lunge',
              description: 'Begin with a hip-width stance holding a dumbbell in each hand. Put one leg forward, bending your knees to lower your hips. Dip until your back knee nearly meets the floor. Keep an upright posture, and avoid moving your front knee past your toes to avoid injury. Put your weight on your front foot’s heel and ascend from the lunge. Switch sides and repeat.',
              sets: '3',
              repetitions: '12',
              rest: '60 sec'
            },
            {
              nr: '4',
              name: 'Leg Extensions',
              description: 'Set the load, sit on the machine keeping your legs hooked under the foot pads, and put your hands on the sidebars. Make sure that your upper and lower legs form a perfect 90-degree to avoid undue stress on your knees. Always keep your knees aligned with your toes. As you exhale, extend your legs fully using your quads. Keep your back flat on the padded seat during the movement. Pause and squeeze for a moment and then slowly retreat to your original position. Repeat until you finish the set.',
              sets: '3',
              repetitions: '10',
              rest: '45 sec'
            },
            {
              nr: '5',
              name: 'Romanian Deadlift',
              description: 'Assume a shoulder-width stance while holding a bar with your palms facing down at a hip level. Arch your back, keep your shoulders back, and your knees bent slightly. Move your buttocks back as far as you can as you lower the bar. Maintain the bar’s distance to your body while keeping your shoulders back, chest out and your head looking forward. Lower the bar down to about knee level, then drive the hips forward, and return to your initial position.',
              sets: '3',
              repetitions: '10',
              rest: '60 sec'
            },
            {
              nr: '6',
              name: 'Lying Leg Curls',
              description: 'Lie face down on the machine and place your feet under the foot pad — a few inches below the calves. Grab the machine’s handle, keep your torso flat, and stretch your legs fully. Keeping your upper legs on the pad, curl your legs as far as you can while you exhale. Pause for a second after fully curling your legs. Go back to the original position as you inhale.',
              sets: '3',
              repetitions: '10',
              rest: '60 sec'
            },
            {
              nr: '7',
              name: 'Standing Calf Raises',
              description: 'Set the calf raise machine to your height. Stand on the machine with your toes facing forward and your shoulders rested under the machine’s pads. Plant the balls of your feet firmly on the step with your heels extending over the edge. As you exhale, raise your heels as high as you can, feeling your calves flex. Pause for a second and lower your heels to return to your initial position.',
              sets: '4',
              repetitions: '14-20',
              rest: '60 sec'
            },
          ]
        },
        {
          id: '3',
          title: 'Abs',
          exercises: 
          [
            {
              nr: '1',
              name: 'Hardstyle plank',
              description: 'Lying face down on the ground, prop yourself up into a forearm plank position. Make sure your elbows are aligned underneath your shoulders, and that your hands are balled up in fists. Your forearms should be parallel to one another.',
              sets: '3',
              repetitions: 'Hold on as long as you can.',
              rest: '30 sec'
            },
            {
              nr: '2',
              name: 'Dead bug',
              description: 'Lay face up on the floor with arms straight above your shoulders. To start, bring your knees directly over your hips and bend at the knee so that your calf forms a 90-degree angle with your thigh. Next, simultaneously lower your left arm above your head while straightening your right leg and sending it towards the floor. Pause, return to the starting position, and then repeat on the opposite side.',
              sets: '3',
              repetitions: '14',
              rest: '30 sec'
            },
            {
              nr: '3',
              name: 'Hollow extension-to-cannonball',
              description: 'Get into a cannonball-type shape on your back, hugging your knees into your chest—yes, just like you’re at the pool at summer camp again. Simultaneously extend your legs and arms outwards into a “hollow” position, pressing your lower back to the floor. Hold for five seconds before curling up again',
              sets: '3',
              repetitions: '8',
              rest: '30 sec'
            },
            {
              nr: '4',
              name: 'Dumbbell side bend',
              description: 'Stand with your feet hip-width apart and hold a dumbbell in your right hand, palm facing inwards towards the torso. Keep your back straight, activate your core, and then bend to the side as far as possible—but only at the waist. Hold for one second at the bottom of your range of motion, and return to start for one rep.',
              sets: '3',
              repetitions: '20',
              rest: '45 sec'
            },
            {
              nr: '5',
              name: 'Bird dog',
              description: 'Think of this as an upside-down dead bug. Start in a tabletop position, with your shoulders over wrists and hips over knees. Engage your core while simultaneously lifting your right arm and left leg. Your foot should be flexed as you kick back, and your palm should face in towards your body. Pause for one second when your arm and leg are at the same height as your torso, and then bring your elbow and knee to touch underneath the body.',
              sets: '3',
              repetitions: '5',
              rest: '30 sec'
            },
          ]
        },
        {
          id: '4',
          title: 'Back',
          exercises: [{
              nr: '1',
              name: 'Barbell Deadlift',
              description: 'Remove shoes or wear flat foot wear for extra stability – also Liquid chalk and/or wrist strips can improve grip! Stand facing loaded barbell with the relevant weight, feet shoulder width apart. Keeping your back straight, place bar against your shins and bend your knees. Reach down and grasp bar: this should be done with a shoulder-width, overhand grip. Drive up through heels: keep weight central and close to your body. Facing forward, keeping your head in that same position throughout the lift – locking out at the top and keeping lats tensed. On the way back down, keep head in the same position, and the bar as close – allow the bar to brush off the top of your leg to keep weight centred and hold control. Once the weight hits the ground, pause and complete next rep.',
              sets: '6',
              repetitions: '6',
              rest: '20 sec'
            },
            {
              nr: '2',
              name: 'Reverse cable flies',
              description: 'Firstly, adjust the cables so that they are just above your head. Grab the cables with your opposite hands. Keep your arms straight as you extend each cable so that your arms are at completely straight, and slowly return back to your starting position. That is one repetition. If you can only access one side of the cable machine, do as mentioned before, but with one arm at a time.',
              sets: '4',
              repetitions: '8',
              rest: '30 sec'
            },
            {
              nr: '3',
              name: 'Bent-over barbell row',
              description: 'Keep a slight bend in your knees and lean forward, form a 45° between torso and the floor. Back should remain straight, and chest pushed up with head kept straight. Again, get a feel for the bar before this exercise, so you can add the appropriate weight. Approach and grab bar with thumbs facing each other – hands placed slightly wider than shoulder width. Pull the weight along thighs up to navel (belly-button). Do not contract biceps forearms. Pull the barbell with your elbows (again, not biceps.) Lift the barbell towards  waist then squeeze lower back to get the most of the contraction.',
              sets: '4',
              repetitions: '6',
              rest: '30 sec'
            },
            {
              nr: '4',
              name: 'Wide-grip lat pull down',
              description: 'Sit down and adjust the leg cushion to ensure you’re locked in position. After adjusting the weight to suit your strength, pull the bar down, with your palms facing the bar, while placed a couple of inches in the edge of the bar. Pull down to the chin, before slowly returning until your arms are just short of being at a 180 degree angle. Repeat the movement.',
              sets: '4',
              repetitions: '8',
              rest: '30 sec'
            },
          ]
        },
        {
          id: '5',
          title: 'Arm',
          exercises: [{
              nr: '1',
              name: 'Barbell Curl',
              description: 'Stand tall with your chest up and core braced, holding the barbell with your hands just outside of your hips, using an underhand grip. Keeping your chest up and your elbows tight to your sides, initiate the move by raising your hands slightly so you feel your biceps become engaged. While maintaining tension on your biceps, curl the bar up to shoulder height, then give your biceps a one-second squeeze. Start to lower the bar slowly, keeping your biceps tensed and engaged to work as many muscle fibres as possible. Once the bar is back in the start position, straighten your arms fully to tense your triceps to ensure that your biceps are worked through the fullest possible range of motion.',
              sets: '4',
              repetitions: '8-12',
              rest: '45 sec'
            },
            {
              nr: '2',
              name: 'Dumbbell Preacher Curl',
              description: 'Set up a preacher curl bench making sure that the seat is set at the right height for you. The seat shouldn’t be so low that you need to raise your shoulders, or so high that you need to lean over the support pad. Rest you arm on the support pad with your triceps near the top and your elbow midway down the pad. Grip the dumbbell with an underhand grip at shoulder width. Curl the dumbbell in towards your chin and upper chest in a single smooth arc. Hold for a count of one while squeezing your biceps. Lower the dumbbell by extending your arms back to the starting position. Repeat for the desired number of repetitions then change to your other arm.',
              sets: '4',
              repetitions: '10',
              rest: '30 sec'
            },
            {
              nr: '3',
              name: 'Biceps Cable Curl',
              description: 'Stand comfortably with feet firmly placed on the floor. Brace the abdominal muscles, straighten the back, keep the head steady. Curl the cable weight upward toward the chest, breathing out. Only your forearms should move, rising up from the elbow. Hold at the top of the contraction for one second. Inhale and unbend the arms at the elbow to let the cable weight return the arms to the lower resting position. Stop before the weights return to the stack, keeping the cable under tension.',
              sets: '4',
              repetitions: '10',
              rest: '30 sec'
            },
            {
              nr: '4',
              name: 'Skullcrusher',
              description: 'Keep your upper arms perpendicular to the floor, not necessarily perpendicular to your body. This ensures you are working against gravity. Your arms should automatically be perpendicular to your body when you are on a flat bench, but will not necessarily be when you are doing the movement on an incline or decline bench. Only extend your elbows. Avoid allowing your upper arms to move back and forth from their position as you raise and lower the weight. If you move your arms, you put some of the load on your shoulders. Lower the weight under control, which means using a weight you can safely handle. Use a very deliberate rep speed on the negative. I assume you know why! (If not, just reference the exercise name again.) As you power the weight back up, stop just short of full extension so that you are unable to rest in the top position, which keeps tension on the muscle throughout the range of motion. Use a spotter when training to failure. A spotter can also assist you with a few additional forced reps, hand you the weight to begin, or grab the weight when you are done. Keep your elbows in tight as much as possible and avoid elbow flare to ensure the triceps do the bulk of the work. Allowing your elbows to flare out reduces the triceps is workload',
              sets: '4',
              repetitions: '10',
              rest: '45 sec'
            },
            {
              nr: '5',
              name: 'Cable Triceps Pushdown',
              description: 'Start off standing in front of a cable machine, attaching a rope to the high pulley and grabbing the attachment with an overhand (palms down) grip. Keeping your abs drawn in, back straight and elbows in at your sides, push the rope down towards your thighs. As you push down towards your thighs, split the rope apart at the bottom and isolate the tricep muscle. Hold this position for a count and return back up to the starting position. Repeat for as many reps and sets as desired.',
              sets: '4',
              repetitions: '10',
              rest: '45 sec'
            },
            {
              nr: '6',
              name: 'Seated Single Arm Overhead Dumbbell Tricep Extensions',
              description: 'Sit on a bench while holding a dumbbell in your left hand with an overhand grip. Tighten your core and straighten your lower back. Lift the dumbbell to shoulder height. Push the dumbbell overhead with your palm facing forward. Keep the upper arm in place. Slowly bend at the elbow and lower the weight behind your head. Push the dumbbell back up over your head squeezing the tricep muscle. Immediately begin the next repetition. Switch sides once you have completed all repetitions.',
              sets: '4',
              repetitions: '10',
              rest: '45 sec'
            },
          ]
        },
        {
          id: '6',
          title: 'Shoulder',
          exercises: 
          [
            {
            nr: '1',
            name: 'Seated lateral raise',
            description: 'take light dumbbells then, leaning forward slightly, raise them to shoulder height, leading with your elbows. Pause at the top, then lower back under control.',
            sets: '3',
            repetitions: '12',
            rest: '10 sec'
          },
          {
            nr: '2',
            name: 'Seated Arnold press',
            description: 'Sit holding a dumbbell in each hand with palms facing you. Press them up overhead, rotating your wrists as you go, so you end with straight arms and palms facing away.',
            sets: '3',
            repetitions: '12',
            rest: '10 sec'
          },
          {
            nr: '3',
            name: 'Bent-over reverse flye',
            description: 'Stand up and, using the same weights as the seated lateral raise exercise, bend forwards from your hips. Lead with your elbows to raise the weights to shoulder height. Pause, then lower back under control.',
            sets: '3',
            repetitions: '12',
            rest: '90 sec'
          },
          {
            nr: '4',
            name: 'Overhead press',
            description: 'Tand tall with a barbell across the front of your shoulders. Brace your core, then press the bar directly overhead. Lower it slowly back to the start.',
            sets: '3',
            repetitions: '12',
            rest: '10 sec'
          },          
        ]
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },


  },
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});