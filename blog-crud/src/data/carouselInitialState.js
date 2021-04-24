const carouselInitialState = {
  articles: [
    {
      title: 'Article One',
      route: '/update/1',
      image: 'https://eskipaper.com/images/landscape-photos-21.jpg',
      words: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus commodo velit id pretium. Cras sit amet lacus leo. Morbi tincidunt in ante a rhoncus. Sed eu ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquet justo id semper porta. Etiam vel consequat urna. Pellentesque cursus nunc augue, non laoreet ipsum consequat at. Suspendisse rhoncus lacinia leo, sit amet aliquet tortor dignissim eu.

        Duis ultrices pretium pellentesque. In ultrices arcu ipsum, eget blandit ipsum fermentum eu. Duis facilisis nisl at eros malesuada blandit. Nunc sit amet arcu volutpat, dictum mauris egestas, accumsan augue. Vestibulum ex augue, auctor sed erat at, viverra efficitur turpis. In nibh libero, vestibulum sed aliquam eget, accumsan vitae urna. Quisque consequat magna et tellus pretium sodales. Nam sollicitudin hendrerit mi quis placerat. Cras mauris elit, lacinia ac massa vitae, interdum dictum diam. Duis facilisis, massa vel consectetur tincidunt, risus erat ultricies risus, at finibus arcu arcu vitae eros. Suspendisse potenti. Cras arcu turpis, varius quis purus in, lobortis tempus magna.

        Vivamus cursus consectetur nibh. Vivamus sodales quam diam, at tempor massa interdum vel. Nulla quis purus a tortor vehicula venenatis at in urna. Vivamus rhoncus facilisis nibh vitae imperdiet. Donec ex arcu, posuere in tempor eu, ultrices vitae est. Aliquam congue dignissim sagittis. Curabitur lobortis lacinia volutpat. Maecenas cursus congue augue, ac accumsan libero dapibus ut. Integer egestas non nisi quis aliquam. Maecenas eget nibh lacinia, molestie magna vitae, tempor nulla. Integer posuere magna quis libero vehicula, in commodo turpis aliquet.

        Praesent at lorem neque. Phasellus fringilla consequat ante, tempus scelerisque erat eleifend in. Sed consequat elit non nisl eleifend mattis. Integer id felis eget mi vulputate placerat. Integer a metus mi. Nam a leo vitae erat elementum finibus nec et justo. Curabitur maximus condimentum volutpat. In nec sem suscipit, accumsan urna non, convallis metus. Quisque lacinia justo justo, in scelerisque ex mattis a. Sed leo magna, consequat ut varius ac, commodo sit amet urna. Integer pharetra lacinia sem, ut sodales orci vestibulum congue. In quis risus consequat metus porttitor ullamcorper commodo in dui. Nulla quis tortor dignissim, maximus quam sed, interdum urna. Pellentesque mi tortor, venenatis sed neque non, aliquam scelerisque nulla. Proin risus magna, dignissim et ultricies nec, finibus eget risus.

        Ut in lacus varius tellus aliquet tempus vel ut leo. Integer efficitur sed velit eget ultricies. Etiam viverra nulla nec tellus pulvinar ullamcorper. Proin vitae tellus eu est aliquam fringilla. Donec at mi lorem. In fringilla ultricies odio ut pharetra. Nunc interdum nisi ut mi malesuada porta. Maecenas pretium, ex et interdum tristique, quam lectus consequat metus, eu efficitur mauris metus eu nisi. Nulla a pellentesque arcu. Sed nec arcu tellus. Pellentesque vel scelerisque turpis. Mauris tempus, felis a ornare sodales, turpis tellus imperdiet elit, vitae pretium enim nibh et justo. Mauris a aliquam eros. Ut vitae placerat nisl. Mauris lobortis scelerisque est, at ullamcorper diam ornare ut.
      `,
    },
    {
      title: 'Article Two',
      route: '/update/2',
      image:
        'https://www.wallpapertip.com/wmimgs/6-62055_nature-pictures-of-oil-paintings-landscape.jpg',
      words: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus commodo velit id pretium. Cras sit amet lacus leo. Morbi tincidunt in ante a rhoncus. Sed eu ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquet justo id semper porta. Etiam vel consequat urna. Pellentesque cursus nunc augue, non laoreet ipsum consequat at. Suspendisse rhoncus lacinia leo, sit amet aliquet tortor dignissim eu.

        Duis ultrices pretium pellentesque. In ultrices arcu ipsum, eget blandit ipsum fermentum eu. Duis facilisis nisl at eros malesuada blandit. Nunc sit amet arcu volutpat, dictum mauris egestas, accumsan augue. Vestibulum ex augue, auctor sed erat at, viverra efficitur turpis. In nibh libero, vestibulum sed aliquam eget, accumsan vitae urna. Quisque consequat magna et tellus pretium sodales. Nam sollicitudin hendrerit mi quis placerat. Cras mauris elit, lacinia ac massa vitae, interdum dictum diam. Duis facilisis, massa vel consectetur tincidunt, risus erat ultricies risus, at finibus arcu arcu vitae eros. Suspendisse potenti. Cras arcu turpis, varius quis purus in, lobortis tempus magna.

        Vivamus cursus consectetur nibh. Vivamus sodales quam diam, at tempor massa interdum vel. Nulla quis purus a tortor vehicula venenatis at in urna. Vivamus rhoncus facilisis nibh vitae imperdiet. Donec ex arcu, posuere in tempor eu, ultrices vitae est. Aliquam congue dignissim sagittis. Curabitur lobortis lacinia volutpat. Maecenas cursus congue augue, ac accumsan libero dapibus ut. Integer egestas non nisi quis aliquam. Maecenas eget nibh lacinia, molestie magna vitae, tempor nulla. Integer posuere magna quis libero vehicula, in commodo turpis aliquet.

        Praesent at lorem neque. Phasellus fringilla consequat ante, tempus scelerisque erat eleifend in. Sed consequat elit non nisl eleifend mattis. Integer id felis eget mi vulputate placerat. Integer a metus mi. Nam a leo vitae erat elementum finibus nec et justo. Curabitur maximus condimentum volutpat. In nec sem suscipit, accumsan urna non, convallis metus. Quisque lacinia justo justo, in scelerisque ex mattis a. Sed leo magna, consequat ut varius ac, commodo sit amet urna. Integer pharetra lacinia sem, ut sodales orci vestibulum congue. In quis risus consequat metus porttitor ullamcorper commodo in dui. Nulla quis tortor dignissim, maximus quam sed, interdum urna. Pellentesque mi tortor, venenatis sed neque non, aliquam scelerisque nulla. Proin risus magna, dignissim et ultricies nec, finibus eget risus.

        Ut in lacus varius tellus aliquet tempus vel ut leo. Integer efficitur sed velit eget ultricies. Etiam viverra nulla nec tellus pulvinar ullamcorper. Proin vitae tellus eu est aliquam fringilla. Donec at mi lorem. In fringilla ultricies odio ut pharetra. Nunc interdum nisi ut mi malesuada porta. Maecenas pretium, ex et interdum tristique, quam lectus consequat metus, eu efficitur mauris metus eu nisi. Nulla a pellentesque arcu. Sed nec arcu tellus. Pellentesque vel scelerisque turpis. Mauris tempus, felis a ornare sodales, turpis tellus imperdiet elit, vitae pretium enim nibh et justo. Mauris a aliquam eros. Ut vitae placerat nisl. Mauris lobortis scelerisque est, at ullamcorper diam ornare ut.
      `,
    },
    {
      title: 'Article Three',
      route: '/update/3',
      image:
        'https://www.teahub.io/photos/full/54-547365_beautiful-landscape-wallpaper.jpg',
      words: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus commodo velit id pretium. Cras sit amet lacus leo. Morbi tincidunt in ante a rhoncus. Sed eu ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquet justo id semper porta. Etiam vel consequat urna. Pellentesque cursus nunc augue, non laoreet ipsum consequat at. Suspendisse rhoncus lacinia leo, sit amet aliquet tortor dignissim eu.

        Duis ultrices pretium pellentesque. In ultrices arcu ipsum, eget blandit ipsum fermentum eu. Duis facilisis nisl at eros malesuada blandit. Nunc sit amet arcu volutpat, dictum mauris egestas, accumsan augue. Vestibulum ex augue, auctor sed erat at, viverra efficitur turpis. In nibh libero, vestibulum sed aliquam eget, accumsan vitae urna. Quisque consequat magna et tellus pretium sodales. Nam sollicitudin hendrerit mi quis placerat. Cras mauris elit, lacinia ac massa vitae, interdum dictum diam. Duis facilisis, massa vel consectetur tincidunt, risus erat ultricies risus, at finibus arcu arcu vitae eros. Suspendisse potenti. Cras arcu turpis, varius quis purus in, lobortis tempus magna.

        Vivamus cursus consectetur nibh. Vivamus sodales quam diam, at tempor massa interdum vel. Nulla quis purus a tortor vehicula venenatis at in urna. Vivamus rhoncus facilisis nibh vitae imperdiet. Donec ex arcu, posuere in tempor eu, ultrices vitae est. Aliquam congue dignissim sagittis. Curabitur lobortis lacinia volutpat. Maecenas cursus congue augue, ac accumsan libero dapibus ut. Integer egestas non nisi quis aliquam. Maecenas eget nibh lacinia, molestie magna vitae, tempor nulla. Integer posuere magna quis libero vehicula, in commodo turpis aliquet.

        Praesent at lorem neque. Phasellus fringilla consequat ante, tempus scelerisque erat eleifend in. Sed consequat elit non nisl eleifend mattis. Integer id felis eget mi vulputate placerat. Integer a metus mi. Nam a leo vitae erat elementum finibus nec et justo. Curabitur maximus condimentum volutpat. In nec sem suscipit, accumsan urna non, convallis metus. Quisque lacinia justo justo, in scelerisque ex mattis a. Sed leo magna, consequat ut varius ac, commodo sit amet urna. Integer pharetra lacinia sem, ut sodales orci vestibulum congue. In quis risus consequat metus porttitor ullamcorper commodo in dui. Nulla quis tortor dignissim, maximus quam sed, interdum urna. Pellentesque mi tortor, venenatis sed neque non, aliquam scelerisque nulla. Proin risus magna, dignissim et ultricies nec, finibus eget risus.

        Ut in lacus varius tellus aliquet tempus vel ut leo. Integer efficitur sed velit eget ultricies. Etiam viverra nulla nec tellus pulvinar ullamcorper. Proin vitae tellus eu est aliquam fringilla. Donec at mi lorem. In fringilla ultricies odio ut pharetra. Nunc interdum nisi ut mi malesuada porta. Maecenas pretium, ex et interdum tristique, quam lectus consequat metus, eu efficitur mauris metus eu nisi. Nulla a pellentesque arcu. Sed nec arcu tellus. Pellentesque vel scelerisque turpis. Mauris tempus, felis a ornare sodales, turpis tellus imperdiet elit, vitae pretium enim nibh et justo. Mauris a aliquam eros. Ut vitae placerat nisl. Mauris lobortis scelerisque est, at ullamcorper diam ornare ut.
      `,
    },
    {
      title: 'Article Four',
      route: '/update/4',
      image:
        'https://images.hdqwalls.com/download/pixel-landscape-dt-1600x1200.jpg',
      words: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus commodo velit id pretium. Cras sit amet lacus leo. Morbi tincidunt in ante a rhoncus. Sed eu ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquet justo id semper porta. Etiam vel consequat urna. Pellentesque cursus nunc augue, non laoreet ipsum consequat at. Suspendisse rhoncus lacinia leo, sit amet aliquet tortor dignissim eu.

        Duis ultrices pretium pellentesque. In ultrices arcu ipsum, eget blandit ipsum fermentum eu. Duis facilisis nisl at eros malesuada blandit. Nunc sit amet arcu volutpat, dictum mauris egestas, accumsan augue. Vestibulum ex augue, auctor sed erat at, viverra efficitur turpis. In nibh libero, vestibulum sed aliquam eget, accumsan vitae urna. Quisque consequat magna et tellus pretium sodales. Nam sollicitudin hendrerit mi quis placerat. Cras mauris elit, lacinia ac massa vitae, interdum dictum diam. Duis facilisis, massa vel consectetur tincidunt, risus erat ultricies risus, at finibus arcu arcu vitae eros. Suspendisse potenti. Cras arcu turpis, varius quis purus in, lobortis tempus magna.

        Vivamus cursus consectetur nibh. Vivamus sodales quam diam, at tempor massa interdum vel. Nulla quis purus a tortor vehicula venenatis at in urna. Vivamus rhoncus facilisis nibh vitae imperdiet. Donec ex arcu, posuere in tempor eu, ultrices vitae est. Aliquam congue dignissim sagittis. Curabitur lobortis lacinia volutpat. Maecenas cursus congue augue, ac accumsan libero dapibus ut. Integer egestas non nisi quis aliquam. Maecenas eget nibh lacinia, molestie magna vitae, tempor nulla. Integer posuere magna quis libero vehicula, in commodo turpis aliquet.

        Praesent at lorem neque. Phasellus fringilla consequat ante, tempus scelerisque erat eleifend in. Sed consequat elit non nisl eleifend mattis. Integer id felis eget mi vulputate placerat. Integer a metus mi. Nam a leo vitae erat elementum finibus nec et justo. Curabitur maximus condimentum volutpat. In nec sem suscipit, accumsan urna non, convallis metus. Quisque lacinia justo justo, in scelerisque ex mattis a. Sed leo magna, consequat ut varius ac, commodo sit amet urna. Integer pharetra lacinia sem, ut sodales orci vestibulum congue. In quis risus consequat metus porttitor ullamcorper commodo in dui. Nulla quis tortor dignissim, maximus quam sed, interdum urna. Pellentesque mi tortor, venenatis sed neque non, aliquam scelerisque nulla. Proin risus magna, dignissim et ultricies nec, finibus eget risus.

        Ut in lacus varius tellus aliquet tempus vel ut leo. Integer efficitur sed velit eget ultricies. Etiam viverra nulla nec tellus pulvinar ullamcorper. Proin vitae tellus eu est aliquam fringilla. Donec at mi lorem. In fringilla ultricies odio ut pharetra. Nunc interdum nisi ut mi malesuada porta. Maecenas pretium, ex et interdum tristique, quam lectus consequat metus, eu efficitur mauris metus eu nisi. Nulla a pellentesque arcu. Sed nec arcu tellus. Pellentesque vel scelerisque turpis. Mauris tempus, felis a ornare sodales, turpis tellus imperdiet elit, vitae pretium enim nibh et justo. Mauris a aliquam eros. Ut vitae placerat nisl. Mauris lobortis scelerisque est, at ullamcorper diam ornare ut.
      `,
    },
    {
      title: 'Article Five',
      route: '/update/5',
      image: 'https://eskipaper.com/images/beautiful-winter-landscape-8.jpg',
      words: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus commodo velit id pretium. Cras sit amet lacus leo. Morbi tincidunt in ante a rhoncus. Sed eu ornare mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In aliquet justo id semper porta. Etiam vel consequat urna. Pellentesque cursus nunc augue, non laoreet ipsum consequat at. Suspendisse rhoncus lacinia leo, sit amet aliquet tortor dignissim eu.

      Duis ultrices pretium pellentesque. In ultrices arcu ipsum, eget blandit ipsum fermentum eu. Duis facilisis nisl at eros malesuada blandit. Nunc sit amet arcu volutpat, dictum mauris egestas, accumsan augue. Vestibulum ex augue, auctor sed erat at, viverra efficitur turpis. In nibh libero, vestibulum sed aliquam eget, accumsan vitae urna. Quisque consequat magna et tellus pretium sodales. Nam sollicitudin hendrerit mi quis placerat. Cras mauris elit, lacinia ac massa vitae, interdum dictum diam. Duis facilisis, massa vel consectetur tincidunt, risus erat ultricies risus, at finibus arcu arcu vitae eros. Suspendisse potenti. Cras arcu turpis, varius quis purus in, lobortis tempus magna.

      Vivamus cursus consectetur nibh. Vivamus sodales quam diam, at tempor massa interdum vel. Nulla quis purus a tortor vehicula venenatis at in urna. Vivamus rhoncus facilisis nibh vitae imperdiet. Donec ex arcu, posuere in tempor eu, ultrices vitae est. Aliquam congue dignissim sagittis. Curabitur lobortis lacinia volutpat. Maecenas cursus congue augue, ac accumsan libero dapibus ut. Integer egestas non nisi quis aliquam. Maecenas eget nibh lacinia, molestie magna vitae, tempor nulla. Integer posuere magna quis libero vehicula, in commodo turpis aliquet.

      Praesent at lorem neque. Phasellus fringilla consequat ante, tempus scelerisque erat eleifend in. Sed consequat elit non nisl eleifend mattis. Integer id felis eget mi vulputate placerat. Integer a metus mi. Nam a leo vitae erat elementum finibus nec et justo. Curabitur maximus condimentum volutpat. In nec sem suscipit, accumsan urna non, convallis metus. Quisque lacinia justo justo, in scelerisque ex mattis a. Sed leo magna, consequat ut varius ac, commodo sit amet urna. Integer pharetra lacinia sem, ut sodales orci vestibulum congue. In quis risus consequat metus porttitor ullamcorper commodo in dui. Nulla quis tortor dignissim, maximus quam sed, interdum urna. Pellentesque mi tortor, venenatis sed neque non, aliquam scelerisque nulla. Proin risus magna, dignissim et ultricies nec, finibus eget risus.

      Ut in lacus varius tellus aliquet tempus vel ut leo. Integer efficitur sed velit eget ultricies. Etiam viverra nulla nec tellus pulvinar ullamcorper. Proin vitae tellus eu est aliquam fringilla. Donec at mi lorem. In fringilla ultricies odio ut pharetra. Nunc interdum nisi ut mi malesuada porta. Maecenas pretium, ex et interdum tristique, quam lectus consequat metus, eu efficitur mauris metus eu nisi. Nulla a pellentesque arcu. Sed nec arcu tellus. Pellentesque vel scelerisque turpis. Mauris tempus, felis a ornare sodales, turpis tellus imperdiet elit, vitae pretium enim nibh et justo. Mauris a aliquam eros. Ut vitae placerat nisl. Mauris lobortis scelerisque est, at ullamcorper diam ornare ut.
    `,
    },
  ],
};

export default carouselInitialState;
