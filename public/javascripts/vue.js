Vue.component('mycomponent1', {
    template: '<header id="headerNav"><span>Food Blog</span><div id="navContent"><ul class="nav nav-pills flex-column flex-sm-row"><li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link active" href="#">Home</a></li><li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link" href="#">Recipes</a></li><li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link" href="#">Lifestyles</a></li><li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link" href="#">Videos</a></li><li class="nav-item"><a class="flex-sm-fill text-sm-center nav-link" href="#">About</a></li></ul></div></header>'
})
var vm1 = new Vue({
    el: '#component1'
})
Vue.component('mycomponent2', {
    template: '<h2>COMMENTS</h2>',
})
var vm2 = new Vue({
    el: '#component2'
})
var vm3 = new Vue({
    el: '#photos',
    data: {
        src: 'images/chili.jpg',
        alt: 'White Chicken Chili',
        width: '180'
    }
})
var app = new Vue({
    el: '#blogposts',
    data() {
        return {
            styleObj: {
                position: 'fixed',
                top: '0',
                left: '0',
                height: '100%',
                width: '100%',
                zIndex: '10',
                backgroundColor: 'rgba(128, 101, 101,0.5)',
            },
            overlay: false,
            posts:
                [
                    {
                        author: 'Brianna',
                        date: 'February 18, 2021 @ 3:30 pm',
                        reply: 'REPLY',
                        text: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
                        level: 'Novice',
                        bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
                        isShowing: false,
                    },
                    {
                        author: 'LINH',
                        date: 'February 15, 2021 @ 9:46 am',
                        reply: 'REPLY',
                        text: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!',
                        level: 'Newcomer',
                        bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
                        isShowing: false,
                    },
                    {
                        author: 'CATHERINE LEONARDO',
                        date: 'February 13, 2021 @ 12:58 pm',
                        reply: 'REPLY',
                        text: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
                        level: 'Mentor',
                        bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
                        isShowing: false,
                    },
                    {
                        author: 'KALI',
                        date: 'February 13, 2021 @ 11:31 am',
                        reply: 'REPLY',
                        text: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
                        level: 'Novice',
                        bio: "Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I'm a food whore! Invite me over for dinner and I'll be there!",
                        isShowing: false,
                    },
                ]
        }
    },
    methods: {
        displayInfo: function (posts, post) {
            this.overlay = !this.overlay;
            if (post.isShowing == false) {
                for (i = 0; i < posts.length; i++) {
                    posts[i].isShowing = false;
                    post.isShowing = true;

                }
            } else {
                post.isShowing = false;
            }
        }
    }
});

