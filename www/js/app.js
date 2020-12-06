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
      // Demo products for Catalog section
      products: [
        {
          id: '1',
          title: 'Apple iPhone 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Apple iPhone 8 Plus',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Apple iPhone X',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {
          id: '4',
          title: 'Apple iPhone Xs',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
      ],
      homeWorkouts: [
        {
          id: '1',
          title: 'Full Body',
        },
        {
          id: '2',
          title: 'Chest',
        },
        {
          id: '3',
          title: 'Leg',
        },
        {
          id: '4',
          title: 'Abs',
        },
      ],
      fitnessWorkouts: [
        {
          id: '1',
          title: 'Chest',
          exercises: 
          [
            {
              nr: '1',
              name: 'Close-Grip Bench Press',
              description: 'Lie back on a flat bench. Using a close grip (shoulder width), lift the bar from the rack and hold it straight over you with your arms locked. As you breathe in, come down slowly until you feel the bar on your middle chest. After a second pause, bring the bar back to the starting position as you breathe out and push the bar using your triceps muscles. Lock your arms in the contracted position, hold for a second and then start coming down slowly again. Repeat the movement for the prescribed amount of repetitions. When you are done, place the bar back in the rack.',
              sets: '5',
              repetitions: '10',
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
          exercises: 
          [
            {
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
              repetitions: 'Hold for 10 to 20 seconds per set.',
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
        },
        {
          id: '5',
          title: 'Arm',
        },
        {
          id: '6',
          title: 'Shoulder',
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