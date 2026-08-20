(function () {
  'use strict';

  const EMOJIS = {
    'Smileys': [
      { e: '😀', t: 'happy smile grin face' },
      { e: '😃', t: 'happy smile smiley face open mouth' },
      { e: '😄', t: 'happy smile laugh eyes open' },
      { e: '😁', t: 'grin beaming smile teeth' },
      { e: '😆', t: 'laughing happy squinting笑' },
      { e: '😅', t: 'sweat smile nervous relief' },
      { e: '🤣', t: 'rolling laughing lmao rofl' },
      { e: '😂', t: 'cry laughing tears joy lmao' },
      { e: '🙂', t: 'slightly smiling face' },
      { e: '😊', t: 'blush happy smiling warmth' },
      { e: '😇', t: 'innocent halo angel good' },
      { e: '🥰', t: 'love hearts adoring affection' },
      { e: '😍', t: 'heart eyes love crush' },
      { e: '🤩', t: 'star struck excited amazed wow' },
      { e: '😘', t: 'kiss face love blowing' },
      { e: '😗', t: 'kissing face' },
      { e: '😋', t: 'yummy tasty delicious lick' },
      { e: '😛', t: 'tongue playful silly' },
      { e: '😜', t: 'wink tongue crazy silly' },
      { e: '🤪', t: 'zany wild crazy silly' },
      { e: '😝', t: 'tongue squinting yuck' },
      { e: '🤑', t: 'money mouth rich greed' },
      { e: '🤗', t: 'hug embrace warmth' },
      { e: '🤭', t: 'oops giggle hand mouth' },
      { e: '🤫', t: 'shush quiet secret whisper' },
      { e: '🤔', t: 'thinking hmm wonder' },
      { e: '🫡', t: 'salute respect roger' },
      { e: '😐', t: 'neutral face blank meh' },
      { e: '😑', t: 'expressionless straight face' },
      { e: '😶', t: 'no mouth speechless silent' },
      { e: '😏', t: 'smirk flirty suggestive' },
      { e: '😒', t: 'unamused annoyed side eye' },
      { e: '🙄', t: 'eye roll annoyed whatever' },
      { e: '😬', t: 'grimace awkward cringe' },
      { e: '😮‍💨', t: 'exhale sigh relief tired' },
      { e: '🤥', t: 'lying nose pinocchio' },
      { e: '😌', t: 'relieved peaceful calm' },
      { e: '😔', t: 'pensive sad down dejected' },
      { e: '😪', t: 'sleepy tear sad tired' },
      { e: '🤤', t: 'drooling hungry desire' },
      { e: '😴', t: 'sleeping zzz tired snoring' },
      { e: '😷', t: 'sick mask illness covid' },
      { e: '🤒', t: 'sick fever temperature' },
      { e: '🤕', t: 'hurt bandage injury' },
      { e: '🤢', t: 'nauseated sick green' },
      { e: '🤮', t: 'vomit puke sick throw up' },
      { e: '🥵', t: 'hot sweating heat summer' },
      { e: '🥶', t: 'cold freezing winter blue' },
      { e: '🥴', t: 'woozy dizzy drunk tipsy' },
      { e: '😵', t: 'dizzy stunned knocked out' },
      { e: '🤯', t: 'mind blown shocked exploded' },
      { e: '🥳', t: 'party birthday celebrate' },
      { e: '🥸', t: 'disguise incognito mask' },
      { e: '😎', t: 'cool sunglasses awesome' },
      { e: '🤓', t: 'nerd geek smart glasses' },
      { e: '🧐', t: 'monocle inspect curious' },
      { e: '😕', t: 'confused puzzled huh' },
      { e: '😟', t: 'worried concerned anxious' },
      { e: '🙁', t: 'slightly frowning sad' },
      { e: '☹️', t: 'frowning sad unhappy' },
      { e: '😮', t: 'surprised shocked wow open mouth' },
      { e: '😯', t: 'hushed stunned surprise' },
      { e: '😲', t: 'astonished shocked amazed' },
      { e: '😳', t: 'flushed embarrassed blushing' },
      { e: '🥺', t: 'pleading puppy eyes sad cute' },
      { e: '🥹', t: 'holding back tears emotional' },
      { e: '😦', t: 'frowning surprised' },
      { e: '😧', t: 'anguished distressed' },
      { e: '😨', t: 'fearful scared afraid' },
      { e: '😰', t: 'anxious sweat nervous' },
      { e: '😥', t: 'sad but relieved' },
      { e: '😢', t: 'crying sad tear' },
      { e: '😭', t: 'loudly crying sobbing bawling' },
      { e: '😱', t: 'scream fear horror shocked' },
      { e: '😖', t: 'confounded frustrated' },
      { e: '😣', t: 'persevere struggling' },
      { e: '😞', t: 'disappointed sad down' },
      { e: '😓', t: 'cold sweat anxious' },
      { e: '😩', t: 'weary tired exhausted' },
      { e: '😫', t: 'tired exhausted frustrated' },
      { e: '😤', t: 'angry frustrated huffing triumph' },
      { e: '😡', t: 'angry rage fury mad' },
      { e: '😠', t: 'angry mad annoyed' },
      { e: '🤬', t: 'cursing swearing angry symbols' },
      { e: '😈', t: 'devil evil mischievous' },
      { e: '👿', t: 'angry devil evil' },
      { e: '💀', t: 'dead skull death laughing' },
      { e: '☠️', t: 'skull crossbones death danger' },
      { e: '💩', t: 'poop poo crap shit' },
      { e: '🤡', t: 'clown silly joke' },
      { e: '👹', t: 'ogre monster japanese' },
      { e: '👺', t: 'tengu japanese angry' },
      { e: '👻', t: 'ghost halloween spooky' },
      { e: '👽', t: 'alien ufo space' },
      { e: '👾', t: 'alien monster arcade game' },
      { e: '🤖', t: 'robot bot machine' },
      { e: '😺', t: 'cat smile happy' },
      { e: '😸', t: 'cat grin happy' },
      { e: '😹', t: 'cat tear joy laughing' },
      { e: '😻', t: 'cat heart eyes love' },
      { e: '😼', t: 'cat smirk wry' },
      { e: '😽', t: 'cat kiss' },
      { e: '🙀', t: 'cat weary tired' },
      { e: '😿', t: 'cat cry sad' },
      { e: '😾', t: 'cat pout angry' },
      { e: '🙈', t: 'see no evil monkey' },
      { e: '🙉', t: 'hear no evil monkey' },
      { e: '🙊', t: 'speak no evil monkey' },
      { e: '💋', t: 'kiss lips love' },
      { e: '💌', t: 'love letter heart' },
      { e: '💘', t: 'heart arrow cupid love' },
      { e: '💝', t: 'heart ribbon gift love' },
      { e: '💖', t: 'sparkling heart love' },
      { e: '💗', t: 'growing heart love' },
      { e: '💓', t: 'beating heart love' },
      { e: '💞', t: 'revolving hearts love' },
      { e: '💕', t: 'two hearts love' },
      { e: '💟', t: 'heart decoration love' },
      { e: '❣️', t: 'heart exclamation love' },
      { e: '💔', t: 'broken heart sad love' },
      { e: '❤️‍🔥', t: 'heart on fire passionate love' },
      { e: '❤️‍🩹', t: 'mending heart healing' },
      { e: '❤️', t: 'red heart love' },
      { e: '🧡', t: 'orange heart love' },
      { e: '💛', t: 'yellow heart love friendship' },
      { e: '💚', t: 'green heart love' },
      { e: '💙', t: 'blue heart love' },
      { e: '💜', t: 'purple heart love' },
      { e: '🖤', t: 'black heart dark love' },
      { e: '🤍', t: 'white heart love pure' },
      { e: '🤎', t: 'brown heart love' }
    ],
    'People': [
      { e: '👋', t: 'wave hello goodbye hi' },
      { e: '🤚', t: 'hand raised stop high five' },
      { e: '🖐️', t: 'hand five fingers stop' },
      { e: '✋', t: 'hand stop high five' },
      { e: '🖖', t: 'spock vulcan star trek' },
      { e: '🫱', t: 'hand right handshake' },
      { e: '🫲', t: 'hand left handshake' },
      { e: '🫳', t: 'palm down dismiss' },
      { e: '🫴', t: 'palm up beckon' },
      { e: '👌', t: 'ok perfect good' },
      { e: '🤌', t: 'italian fingers chef kiss' },
      { e: '🤏', t: 'pinch small tiny little' },
      { e: '✌️', t: 'peace victory' },
      { e: '🤞', t: 'fingers crossed good luck hope' },
      { e: '🫰', t: 'money snap fingers' },
      { e: '🤟', t: 'love you hand sign' },
      { e: '🤘', t: 'rock on horns' },
      { e: '🤙', t: 'call me hang loose' },
      { e: '👈', t: 'point left direction' },
      { e: '👉', t: 'point right direction' },
      { e: '👆', t: 'point up index' },
      { e: '🖕', t: 'middle finger flip off' },
      { e: '👇', t: 'point down' },
      { e: '☝️', t: 'point up index important' },
      { e: '🫵', t: 'point at you' },
      { e: '👍', t: 'thumbs up like approve good yes' },
      { e: '👎', t: 'thumbs down dislike no bad' },
      { e: '✊', t: 'fist raised power solidarity' },
      { e: '👊', t: 'fist bump punch' },
      { e: '🤛', t: 'fist left bump' },
      { e: '🤜', t: 'fist right bump' },
      { e: '👏', t: 'clap applause bravo' },
      { e: '🙌', t: 'raised hands praise hallelujah' },
      { e: '🫶', t: 'heart hands love' },
      { e: '👐', t: 'open hands jazz hands' },
      { e: '🤲', t: 'palms up together prayer' },
      { e: '🤝', t: 'handshake deal agreement' },
      { e: '🙏', t: 'pray please thank you namaste' },
      { e: '💪', t: 'strong muscle flex power' },
      { e: '🦾', t: 'mechanical arm robot prosthetic' },
      { e: '🦿', t: 'mechanical leg prosthetic' },
      { e: '🦵', t: 'leg kick' },
      { e: '🦶', t: 'foot stomp' },
      { e: '👂', t: 'ear hear listen' },
      { e: '🦻', t: 'ear hearing aid' },
      { e: '👃', t: 'nose smell' },
      { e: '🧠', t: 'brain smart mind intelligent' },
      { e: '🫀', t: 'anatomical heart' },
      { e: '🦷', t: 'tooth dentist dental' },
      { e: '🦴', t: 'bone skeleton' },
      { e: '👀', t: 'eyes look see watching' },
      { e: '👁️', t: 'eye see look' },
      { e: '👅', t: 'tongue taste lick' },
      { e: '👄', t: 'lips mouth kiss' },
      { e: '👶', t: 'baby infant' },
      { e: '🧒', t: 'child kid young' },
      { e: '👦', t: 'boy child' },
      { e: '👧', t: 'girl child' },
      { e: '🧑', t: 'person adult' },
      { e: '👱', t: 'blond person' },
      { e: '👨', t: 'man' },
      { e: '🧔', t: 'beard man' },
      { e: '👩', t: 'woman' },
      { e: '🧓', t: 'older person elder' },
      { e: '👴', t: 'old man elder grandfather' },
      { e: '👵', t: 'old woman elder grandmother' },
      { e: '🙍', t: 'frown sad disappointed' },
      { e: '🙎', t: 'pout angry' },
      { e: '🙅', t: 'no禁止 denied' },
      { e: '🙆', t: 'ok yes approved' },
      { e: '💁', t: 'information hand sassy' },
      { e: '🙋', t: 'raise hand question' },
      { e: '🧏', t: 'deaf person sign language' },
      { e: '🙇', t: 'bow sorry thank you' },
      { e: '🤦', t: 'facepalm oh no oops' },
      { e: '🤷', t: 'shrug idk whatever dunno' },
      { e: '👮', t: 'police officer cop' },
      { e: '🕵️', t: 'detective spy investigation' },
      { e: '💂', t: 'guard soldier' },
      { e: '🥷', t: 'ninja stealth' },
      { e: '👷', t: 'construction worker builder' },
      { e: '🫅', t: 'person crown royal' },
      { e: '🤴', t: 'prince royal' },
      { e: '👸', t: 'princess princess crown' },
      { e: '👳', t: 'turban person' },
      { e: '👲', t: 'person cap chinese' },
      { e: '🧕', t: 'woman headscarf hijab' },
      { e: '🤵', t: 'person tuxedo suit formal' },
      { e: '👰', t: 'bride wedding veil' },
      { e: '🤰', t: 'pregnant woman baby' },
      { e: '🫃', t: 'pregnant man' },
      { e: '🫄', t: 'pregnant person' },
      { e: '🤱', t: 'breastfeeding baby nurse' },
      { e: '👼', t: 'baby angel cherub' },
      { e: '🎅', t: 'santa claus christmas' },
      { e: '🤶', t: 'mrs claus christmas' },
      { e: '🦸', t: 'superhero superpower' },
      { e: '🦹', t: 'supervillain evil' },
      { e: '🧙', t: 'wizard magic sorcerer' },
      { e: '🧚', t: 'fairy magic wings' },
      { e: '🧛', t: 'vampire dracula' },
      { e: '🧜', t: 'mermaid ocean sea' },
      { e: '🧝', t: 'elf magical' },
      { e: '🧞', t: 'genie magic lamp' },
      { e: '🧟', t: 'zombie undead' },
      { e: '🧌', t: 'troll monster' },
      { e: '💆', t: 'massage spa relax' },
      { e: '💇', t: 'haircut salon' },
      { e: '🚶', t: 'walking person' },
      { e: '🧍', t: 'standing person' },
      { e: '🧎', t: 'kneeling person' },
      { e: '🏃', t: 'running hurry fast' },
      { e: '💃', t: 'dancing woman salsa' },
      { e: '🕺', t: 'dancing man disco' },
      { e: '👯', t: 'people bunny ears party' },
      { e: '🧖', t: 'sauna steam relax spa' },
      { e: '🧗', t: 'climbing rock climb' },
      { e: '🏇', t: 'horse racing jockey' },
      { e: '⛷️', t: 'skier winter snow' },
      { e: '🏂', t: 'snowboarder winter' },
      { e: '🏋️', t: 'weightlifting gym workout' },
      { e: '🤼', t: 'wrestling fight' },
      { e: '🤸', t: 'cartwheel gymnastics' },
      { e: '⛹️', t: 'basketball bounce ball' },
      { e: '🤺', t: 'fencing sword' },
      { e: '🤾', t: 'handball sport' },
      { e: '🏌️', t: 'golf golfing' },
      { e: '🧘', t: 'yoga meditation zen calm' },
      { e: '🏄', t: 'surfing wave' },
      { e: '🏊', t: 'swimming pool' },
      { e: '🤽', t: 'water polo' },
      { e: '🚣', t: 'rowing boat' },
      { e: '🚵', t: 'mountain biking cyclist' },
      { e: '🚴', t: 'biking cycling bicycle' },
      { e: '🏆', t: 'trophy winner champion' },
      { e: '🥇', t: 'gold medal first place' },
      { e: '🥈', t: 'silver medal second place' },
      { e: '🥉', t: 'bronze medal third place' }
    ],
    'Animals': [
      { e: '🐶', t: 'dog puppy pet' },
      { e: '🐱', t: 'cat kitten pet' },
      { e: '🐭', t: 'mouse' },
      { e: '🐹', t: 'hamster pet' },
      { e: '🐰', t: 'rabbit bunny pet' },
      { e: '🦊', t: 'fox clever' },
      { e: '🐻', t: 'bear' },
      { e: '🐼', t: 'panda' },
      { e: '🐻‍❄️', t: 'polar bear arctic' },
      { e: '🐨', t: 'koala australia' },
      { e: '🐯', t: 'tiger' },
      { e: '🦁', t: 'lion king' },
      { e: '🐮', t: 'cow bull farm' },
      { e: '🐷', t: 'pig piggy' },
      { e: '🐸', t: 'frog' },
      { e: '🐵', t: 'monkey ape' },
      { e: '🐔', t: 'chicken hen' },
      { e: '🐧', t: 'penguin' },
      { e: '🐦', t: 'bird' },
      { e: '🐤', t: 'baby chick' },
      { e: '🐣', t: 'hatching chick egg' },
      { e: '🐥', t: 'baby bird' },
      { e: '🦆', t: 'duck' },
      { e: '🦅', t: 'eagle bird' },
      { e: '🦉', t: 'owl wisdom night' },
      { e: '🦇', t: 'bat night vampire' },
      { e: '🐺', t: 'wolf' },
      { e: '🐗', t: 'boar pig' },
      { e: '🐴', t: 'horse' },
      { e: '🦄', t: 'unicorn magical' },
      { e: '🐝', t: 'bee honey buzz' },
      { e: '🐛', t: 'bug caterpillar' },
      { e: '🦋', t: 'butterfly beautiful wings' },
      { e: '🐌', t: 'snail slow' },
      { e: '🐞', t: 'ladybug lucky bug' },
      { e: '🐜', t: 'ant' },
      { e: '🕷️', t: 'spider web' },
      { e: '🐢', t: 'turtle tortoise slow' },
      { e: '🐍', t: 'snake serpent' },
      { e: '🦎', t: 'lizard reptile' },
      { e: '🦖', t: 't-rex dinosaur' },
      { e: '🦕', t: 'dinosaur' },
      { e: '🐙', t: 'octopus' },
      { e: '🦑', t: 'squid' },
      { e: '🦐', t: 'shrimp prawn' },
      { e: '🦞', t: 'lobster' },
      { e: '🦀', t: 'crab' },
      { e: '🐡', t: 'blowfish' },
      { e: '🐠', t: 'tropical fish' },
      { e: '🐟', t: 'fish' },
      { e: '🐬', t: 'dolphin' },
      { e: '🐳', t: 'whale' },
      { e: '🐋', t: 'whale large' },
      { e: '🦈', t: 'shark' },
      { e: '🦭', t: 'seal' },
      { e: '🐊', t: 'crocodile alligator' },
      { e: '🐅', t: 'tiger' },
      { e: '🐆', t: 'leopard' },
      { e: '🦓', t: 'zebra' },
      { e: '🦍', t: 'gorilla ape' },
      { e: '🐘', t: 'elephant' },
      { e: '🦛', t: 'hippo hippopotamus' },
      { e: '🦏', t: 'rhinoceros rhino' },
      { e: '🐪', t: 'camel desert' },
      { e: '🐫', t: 'camel two humps' },
      { e: '🦒', t: 'giraffe tall' },
      { e: '🦘', t: 'kangaroo hop australia' },
      { e: '🐃', t: 'water buffalo' },
      { e: '🐂', t: 'ox bull' },
      { e: '🐄', t: 'cow milk' },
      { e: '🐎', t: 'horse racing' },
      { e: '🐖', t: 'pig sow' },
      { e: '🐏', t: 'ram sheep' },
      { e: '🐑', t: 'sheep lamb' },
      { e: '🦙', t: 'llama alpaca' },
      { e: '🐐', t: 'goat' },
      { e: '🦌', t: 'deer reindeer' },
      { e: '🐕', t: 'dog' },
      { e: '🐩', t: 'poodle dog' },
      { e: '🐕‍🦺', t: 'service dog guide' },
      { e: '🐈', t: 'cat' },
      { e: '🐈‍⬛', t: 'black cat' },
      { e: '🐓', t: 'rooster cock' },
      { e: '🦃', t: 'turkey thanksgiving' },
      { e: '🦚', t: 'peacock beautiful' },
      { e: '🦜', t: 'parrot pirate' },
      { e: '🦢', t: 'swan beautiful' },
      { e: '🦩', t: 'flamingo pink' },
      { e: '🕊️', t: 'dove peace' },
      { e: '🐇', t: 'rabbit bunny' },
      { e: '🦝', t: 'raccoon' },
      { e: '🦨', t: 'skunk' },
      { e: '🦡', t: 'badger' },
      { e: '🦫', t: 'beaver' },
      { e: '🦦', t: 'otter' },
      { e: '🦥', t: 'sloth slow' },
      { e: '🐁', t: 'mouse' },
      { e: '🐀', t: 'rat' },
      { e: '🐿️', t: 'squirrel chipmunk' },
      { e: '🦔', t: 'hedgehog' },
      { e: '🐾', t: 'paw prints animal' },
      { e: '🐉', t: 'dragon' },
      { e: '🐲', t: 'dragon face chinese' }
    ],
    'Food': [
      { e: '🍏', t: 'green apple fruit healthy' },
      { e: '🍎', t: 'red apple fruit' },
      { e: '🍐', t: 'pear fruit' },
      { e: '🍊', t: 'orange citrus tangerine' },
      { e: '🍋', t: 'lemon sour citrus' },
      { e: '🍌', t: 'banana fruit' },
      { e: '🍉', t: 'watermelon summer fruit' },
      { e: '🍇', t: 'grapes wine fruit' },
      { e: '🍓', t: 'strawberry berry fruit' },
      { e: '🫐', t: 'blueberry berry' },
      { e: '🍈', t: 'melon' },
      { e: '🍒', t: 'cherry fruit' },
      { e: '🍑', t: 'peach fruit' },
      { e: '🥭', t: 'mango tropical' },
      { e: '🍍', t: 'pineapple tropical' },
      { e: '🥥', t: 'coconut tropical' },
      { e: '🥝', t: 'kiwi fruit' },
      { e: '🍅', t: 'tomato vegetable' },
      { e: '🍆', t: 'eggplant aubergine' },
      { e: '🥑', t: 'avocado toast' },
      { e: '🥦', t: 'broccoli vegetable healthy' },
      { e: '🥬', t: 'leafy greens lettuce' },
      { e: '🥒', t: 'cucumber pickle' },
      { e: '🌶️', t: 'chili pepper spicy hot' },
      { e: '🫑', t: 'bell pepper capsicum' },
      { e: '🌽', t: 'corn maize' },
      { e: '🥕', t: 'carrot vegetable' },
      { e: '🧄', t: 'garlic' },
      { e: '🧅', t: 'onion' },
      { e: '🥔', t: 'potato' },
      { e: '🍠', t: 'sweet potato' },
      { e: '🥐', t: 'croissant bakery bread' },
      { e: '🥯', t: 'bagel bakery' },
      { e: '🍞', t: 'bread loaf' },
      { e: '🥖', t: 'baguette french bread' },
      { e: '🥨', t: 'pretzel' },
      { e: '🧀', t: 'cheese' },
      { e: '🥚', t: 'egg' },
      { e: '🍳', t: 'egg fried breakfast' },
      { e: '🧈', t: 'butter' },
      { e: '🥞', t: 'pancakes breakfast' },
      { e: '🧇', t: 'waffle breakfast' },
      { e: '🥓', t: 'bacon breakfast' },
      { e: '🥩', t: 'steak meat' },
      { e: '🍗', t: 'chicken drumstick' },
      { e: '🍖', t: 'meat on bone' },
      { e: '🌭', t: 'hot dog' },
      { e: '🍔', t: 'burger hamburger fast food' },
      { e: '🍟', t: 'fries french fries fast food' },
      { e: '🍕', t: 'pizza' },
      { e: '🥪', t: 'sandwich lunch' },
      { e: '🌮', t: 'taco mexican' },
      { e: '🌯', t: 'burrito wrap mexican' },
      { e: '🥗', t: 'salad healthy' },
      { e: '🥘', t: 'paella pan food' },
      { e: '🍝', t: 'spaghetti pasta italian' },
      { e: '🍜', t: 'noodles ramen soup' },
      { e: '🍲', t: 'stew soup pot' },
      { e: '🍛', t: 'curry indian spicy' },
      { e: '🍣', t: 'sushi japanese' },
      { e: '🍱', t: 'bento japanese lunch' },
      { e: '🥟', t: 'dumpling potsticker' },
      { e: '🍙', t: 'rice ball onigiri' },
      { e: '🍚', t: 'rice' },
      { e: '🍘', t: 'rice cracker' },
      { e: '🍥', t: 'fish cake' },
      { e: '🍡', t: 'dango sweet' },
      { e: '🍧', t: 'shaved ice dessert' },
      { e: '🍨', t: 'ice cream dessert' },
      { e: '🍦', t: 'soft ice cream cone' },
      { e: '🥧', t: 'pie dessert' },
      { e: '🧁', t: 'cupcake dessert' },
      { e: '🍰', t: 'cake dessert birthday' },
      { e: '🎂', t: 'birthday cake' },
      { e: '🍮', t: 'custard flan dessert' },
      { e: '🍭', t: 'lollipop candy sweet' },
      { e: '🍬', t: 'candy sweet' },
      { e: '🍫', t: 'chocolate bar sweet' },
      { e: '🍿', t: 'popcorn movie snack' },
      { e: '🍩', t: 'donut doughnut' },
      { e: '🍪', t: 'cookie biscuit' },
      { e: '🌰', t: 'chestnut nut' },
      { e: '🥜', t: 'peanut nut' },
      { e: '🍯', t: 'honey pot sweet' },
      { e: '🥛', t: 'milk glass' },
      { e: '🍼', t: 'baby bottle' },
      { e: '☕', t: 'coffee hot beverage' },
      { e: '🍵', t: 'tea green' },
      { e: '🧃', t: 'juice box drink' },
      { e: '🥤', t: 'cup straw soda drink' },
      { e: '🧋', t: 'boba tea milk tea' },
      { e: '🍶', t: 'sake japanese alcohol' },
      { e: '🍺', t: 'beer drink alcohol' },
      { e: '🍻', t: 'beers cheers toast drink' },
      { e: '🥂', t: 'champagne cheers toast celebrate' },
      { e: '🍷', t: 'wine glass alcohol' },
      { e: '🥃', t: 'whiskey glass alcohol' },
      { e: '🍸', t: 'cocktail drink' },
      { e: '🍹', t: 'tropical cocktail drink' },
      { e: '🧉', t: 'mate drink' },
      { e: '🍾', t: 'champagne celebrate bottle' },
      { e: '🧊', t: 'ice cube cold' },
      { e: '🥄', t: 'spoon' },
      { e: '🍴', t: 'fork knife utensils' },
      { e: '🍽️', t: 'fork plate dinner' },
      { e: '🥣', t: 'bowl spoon cereal' }
    ],
    'Travel': [
      { e: '🚗', t: 'car automobile' },
      { e: '🚕', t: 'taxi cab' },
      { e: '🚙', t: 'car suv' },
      { e: '🚌', t: 'bus' },
      { e: '🚎', t: 'trolleybus' },
      { e: '🏎️', t: 'racing car fast' },
      { e: '🚓', t: 'police car' },
      { e: '🚑', t: 'ambulance emergency' },
      { e: '🚒', t: 'fire engine truck' },
      { e: '🚐', t: 'minibus van' },
      { e: '🛻', t: 'pickup truck' },
      { e: '🚚', t: 'delivery truck' },
      { e: '🚛', t: 'lorry semi truck' },
      { e: '🚜', t: 'tractor farm' },
      { e: '🛵', t: 'motor scooter' },
      { e: '🏍️', t: 'motorcycle motorbike' },
      { e: '🛺', t: 'auto rickshaw' },
      { e: '🚲', t: 'bicycle bike' },
      { e: '🛴', t: 'kick scooter' },
      { e: '🛹', t: 'skateboard' },
      { e: '🛼', t: 'roller skate' },
      { e: '🛣️', t: 'motorway highway road' },
      { e: '🛤️', t: 'railway track train' },
      { e: '⛽', t: 'gas pump fuel' },
      { e: '🚨', t: 'police light emergency siren' },
      { e: '🚥', t: 'traffic light' },
      { e: '🚦', t: 'traffic light vertical' },
      { e: '🛑', t: 'stop sign' },
      { e: '🚧', t: 'construction barrier' },
      { e: '⚓', t: 'anchor nautical ship' },
      { e: '⛵', t: 'sailboat boat' },
      { e: '🛶', t: 'canoe kayak' },
      { e: '🚤', t: 'speedboat' },
      { e: '🛳️', t: 'passenger ship' },
      { e: '⛴️', t: 'ferry' },
      { e: '🛥️', t: 'motor boat' },
      { e: '🚢', t: 'ship cruise' },
      { e: '✈️', t: 'airplane flight fly' },
      { e: '🛩️', t: 'small airplane' },
      { e: '🛫', t: 'airplane takeoff depart' },
      { e: '🛬', t: 'airplane landing arrive' },
      { e: '🪂', t: 'parachute skydiving' },
      { e: '💺', t: 'seat' },
      { e: '🚁', t: 'helicopter' },
      { e: '🚟', t: 'suspension railway' },
      { e: '🚠', t: 'mountain cableway' },
      { e: '🚡', t: 'aerial tramway' },
      { e: '🛰️', t: 'satellite space' },
      { e: '🚀', t: 'rocket space launch' },
      { e: '🛸', t: 'ufo alien flying saucer' },
      { e: '🌍', t: 'earth globe africa europe' },
      { e: '🌎', t: 'earth globe americas' },
      { e: '🌏', t: 'earth globe asia' },
      { e: '🗺️', t: 'world map travel' },
      { e: '🧭', t: 'compass navigation' },
      { e: '🏔️', t: 'mountain snow' },
      { e: '⛰️', t: 'mountain' },
      { e: '🌋', t: 'volcano eruption' },
      { e: '🗻', t: 'mount fuji' },
      { e: '🏕️', t: 'camping tent outdoors' },
      { e: '🏖️', t: 'beach sand sun' },
      { e: '🏜️', t: 'desert sand' },
      { e: '🏝️', t: 'desert island tropical' },
      { e: '🏞️', t: 'national park' },
      { e: '🏟️', t: 'stadium' },
      { e: '🏛️', t: 'classical building museum' },
      { e: '🏗️', t: 'construction crane building' },
      { e: '🧱', t: 'bricks wall' },
      { e: '🪨', t: 'rock boulder' },
      { e: '🪵', t: 'wood log' },
      { e: '🛖', t: 'hut shelter' },
      { e: '🏘️', t: 'houses neighborhood' },
      { e: '🏚️', t: 'derelict house abandoned' },
      { e: '🏠', t: 'house home' },
      { e: '🏡', t: 'house garden suburban' },
      { e: '🏢', t: 'office building' },
      { e: '🏣', t: 'japanese post office' },
      { e: '🏤', t: 'post office' },
      { e: '🏥', t: 'hospital' },
      { e: '🏦', t: 'bank money' },
      { e: '🏨', t: 'hotel' },
      { e: '🏩', t: 'love hotel' },
      { e: '🏪', t: 'convenience store shop' },
      { e: '🏫', t: 'school' },
      { e: '🏬', t: 'department store' },
      { e: '🏭', t: 'factory industry' },
      { e: '🏯', t: 'japanese castle' },
      { e: '🏰', t: 'castle european' },
      { e: '💒', t: 'wedding church' },
      { e: '🗼', t: 'tokyo tower' },
      { e: '🗽', t: 'statue liberty' },
      { e: '⛪', t: 'church religious' },
      { e: '🕌', t: 'mosque islamic' },
      { e: '🛕', t: 'hindu temple' },
      { e: '🕍', t: 'synagogue jewish' },
      { e: '⛩️', t: 'shinto shrine japanese' }
    ],
    'Activities': [
      { e: '⚽', t: 'soccer football sport' },
      { e: '🏀', t: 'basketball sport' },
      { e: '🏈', t: 'american football' },
      { e: '⚾', t: 'baseball sport' },
      { e: '🥎', t: 'softball sport' },
      { e: '🎾', t: 'tennis sport racket' },
      { e: '🏐', t: 'volleyball sport' },
      { e: '🏉', t: 'rugby sport' },
      { e: '🥏', t: 'frisbee disc' },
      { e: '🎱', t: 'pool billiards eight ball' },
      { e: '🏓', t: 'ping pong table tennis' },
      { e: '🏸', t: 'badminton sport' },
      { e: '🏒', t: 'hockey ice' },
      { e: '🏏', t: 'cricket sport' },
      { e: '🥅', t: 'goal net' },
      { e: '⛳', t: 'golf hole flag' },
      { e: '🏹', t: 'archery bow arrow' },
      { e: '🎣', t: 'fishing pole fish' },
      { e: '🤿', t: 'diving snorkel underwater' },
      { e: '🥊', t: 'boxing glove fight' },
      { e: '🥋', t: 'martial arts karate judo' },
      { e: '🎽', t: 'running shirt sports' },
      { e: '🛹', t: 'skateboard skate' },
      { e: '🛷', t: 'sled winter snow' },
      { e: '⛸️', t: 'ice skating winter' },
      { e: '🥌', t: 'curling winter sport' },
      { e: '🎿', t: 'skiing winter snow' },
      { e: '🎯', t: 'bullseye target dart' },
      { e: '🎮', t: 'video game controller play' },
      { e: '🕹️', t: 'joystick game retro' },
      { e: '🎰', t: 'slot machine gambling casino' },
      { e: '🎲', t: 'dice game random' },
      { e: '🧩', t: 'puzzle jigsaw' },
      { e: '🎭', t: 'performing arts theater drama' },
      { e: '🎨', t: 'art palette paint creative' },
      { e: '🧵', t: 'thread sewing' },
      { e: '🪡', t: 'sewing needle' },
      { e: '🧶', t: 'yarn knitting' },
      { e: '🎪', t: 'circus tent' },
      { e: '🎤', t: 'microphone karaoke sing' },
      { e: '🎧', t: 'headphones music listen' },
      { e: '🎼', t: 'musical score music' },
      { e: '🎹', t: 'piano keyboard music' },
      { e: '🥁', t: 'drum music beat' },
      { e: '🎷', t: 'saxophone music jazz' },
      { e: '🎺', t: 'trumpet music' },
      { e: '🎸', t: 'guitar music rock' },
      { e: '🎻', t: 'violin music classical' },
      { e: '♟️', t: 'chess chess piece' },
      { e: '🎳', t: 'bowling sport' },
      { e: '🎫', t: 'ticket admission' },
      { e: '🎟️', t: 'tickets admission' },
      { e: '🎗️', t: 'reminder ribbon awareness' },
      { e: '🏅', t: 'sports medal award' },
      { e: '🥇', t: 'gold medal first winner' },
      { e: '🥈', t: 'silver medal second' },
      { e: '🥉', t: 'bronze medal third' },
      { e: '🏆', t: 'trophy award winner champion' },
      { e: '🏵️', t: 'rosette award' },
      { e: '🎖️', t: 'military medal' }
    ],
    'Objects': [
      { e: '⌚', t: 'watch time' },
      { e: '📱', t: 'mobile phone smartphone' },
      { e: '📲', t: 'phone call incoming' },
      { e: '💻', t: 'laptop computer' },
      { e: '⌨️', t: 'keyboard type' },
      { e: '🖥️', t: 'desktop computer monitor' },
      { e: '🖨️', t: 'printer' },
      { e: '🖱️', t: 'computer mouse' },
      { e: '📷', t: 'camera photo' },
      { e: '📸', t: 'camera flash photo' },
      { e: '📹', t: 'video camera' },
      { e: '🎥', t: 'movie camera film' },
      { e: '📽️', t: 'film projector movie' },
      { e: '📞', t: 'telephone phone call' },
      { e: '☎️', t: 'telephone old' },
      { e: '📺', t: 'television tv' },
      { e: '📻', t: 'radio' },
      { e: '🎙️', t: 'microphone studio recording' },
      { e: '🧭', t: 'compass direction' },
      { e: '⏱️', t: 'stopwatch timer' },
      { e: '⏲️', t: 'timer clock' },
      { e: '⏰', t: 'alarm clock morning' },
      { e: '🕰️', t: 'mantelpiece clock' },
      { e: '⌛', t: 'hourglass time' },
      { e: '⏳', t: 'hourglass flowing time' },
      { e: '📡', t: 'satellite dish signal' },
      { e: '🔋', t: 'battery power charge' },
      { e: '🔌', t: 'electric plug power' },
      { e: '💡', t: 'light bulb idea' },
      { e: '🔦', t: 'flashlight torch' },
      { e: '🕯️', t: 'candle light' },
      { e: '💰', t: 'money bag rich' },
      { e: '🪙', t: 'coin money' },
      { e: '💴', t: 'yen money japan' },
      { e: '💵', t: 'dollar money' },
      { e: '💶', t: 'euro money europe' },
      { e: '💷', t: 'pound money uk' },
      { e: '💳', t: 'credit card payment' },
      { e: '📧', t: 'email letter' },
      { e: '📨', t: 'incoming email' },
      { e: '📩', t: 'email envelope arrow' },
      { e: '📤', t: 'outbox email sent' },
      { e: '📥', t: 'inbox email' },
      { e: '📦', t: 'package box delivery' },
      { e: '🏷️', t: 'label tag price' },
      { e: '📬', t: 'mailbox' },
      { e: '📭', t: 'mailbox empty' },
      { e: '📮', t: 'postbox mail' },
      { e: '🗳️', t: 'ballot box vote' },
      { e: '✏️', t: 'pencil write' },
      { e: '✒️', t: 'pen write' },
      { e: '🖊️', t: 'pen' },
      { e: '🖋️', t: 'fountain pen' },
      { e: '📝', t: 'memo note write' },
      { e: '💼', t: 'briefcase work' },
      { e: '📁', t: 'file folder' },
      { e: '📂', t: 'open folder' },
      { e: '📅', t: 'calendar date' },
      { e: '📆', t: 'calendar' },
      { e: '🗒️', t: 'notepad spiral' },
      { e: '🗓️', t: 'calendar spiral' },
      { e: '📈', t: 'chart increasing graph up' },
      { e: '📉', t: 'chart decreasing graph down' },
      { e: '📊', t: 'bar chart graph statistics' },
      { e: '📋', t: 'clipboard' },
      { e: '📌', t: 'pushpin pin' },
      { e: '📍', t: 'round pushpin location' },
      { e: '📎', t: 'paperclip' },
      { e: '📏', t: 'ruler straight' },
      { e: '📐', t: 'ruler triangle' },
      { e: '✂️', t: 'scissors cut' },
      { e: '🗑️', t: 'wastebasket trash delete' },
      { e: '🔒', t: 'locked lock secure' },
      { e: '🔓', t: 'unlocked lock open' },
      { e: '🔐', t: 'locked key' },
      { e: '🗝️', t: 'old key' },
      { e: '🔑', t: 'key unlock' },
      { e: '🔨', t: 'hammer tool build' },
      { e: '🪓', t: 'axe chop wood' },
      { e: '🪛', t: 'screwdriver tool' }
    ],
    'Symbols': [
      { e: '❤️', t: 'red heart love' },
      { e: '🧡', t: 'orange heart love' },
      { e: '💛', t: 'yellow heart love friendship' },
      { e: '💚', t: 'green heart love' },
      { e: '💙', t: 'blue heart love' },
      { e: '💜', t: 'purple heart love' },
      { e: '🖤', t: 'black heart' },
      { e: '🤍', t: 'white heart pure' },
      { e: '🤎', t: 'brown heart' },
      { e: '💔', t: 'broken heart sad' },
      { e: '❣️', t: 'heart exclamation' },
      { e: '💕', t: 'two hearts love' },
      { e: '💞', t: 'revolving hearts' },
      { e: '💓', t: 'beating heart' },
      { e: '💗', t: 'growing heart' },
      { e: '💖', t: 'sparkling heart' },
      { e: '💘', t: 'heart arrow cupid' },
      { e: '💝', t: 'heart ribbon gift' },
      { e: '💟', t: 'heart decoration' },
      { e: '☮️', t: 'peace symbol' },
      { e: '✝️', t: 'cross christianity' },
      { e: '☪️', t: 'star crescent islam' },
      { e: '🕉️', t: 'om hindu' },
      { e: '☸️', t: 'wheel dharma buddhism' },
      { e: '✡️', t: 'star david judaism' },
      { e: '☯️', t: 'yin yang balance' },
      { e: '☦️', t: 'orthodox cross' },
      { e: '🛐', t: 'place of worship religion' },
      { e: '♈', t: 'aries zodiac' },
      { e: '♉', t: 'taurus zodiac' },
      { e: '♊', t: 'gemini zodiac' },
      { e: '♋', t: 'cancer zodiac' },
      { e: '♌', t: 'leo zodiac' },
      { e: '♍', t: 'virgo zodiac' },
      { e: '♎', t: 'libra zodiac' },
      { e: '♏', t: 'scorpio zodiac' },
      { e: '♐', t: 'sagittarius zodiac' },
      { e: '♑', t: 'capricorn zodiac' },
      { e: '♒', t: 'aquarius zodiac' },
      { e: '♓', t: 'pisces zodiac' },
      { e: '⚛️', t: 'atom science' },
      { e: '🉑', t: 'acceptable chinese' },
      { e: '☢️', t: 'radioactive nuclear danger' },
      { e: '☣️', t: 'biohazard danger toxic' },
      { e: '📴', t: 'phone off silent' },
      { e: '📳', t: 'vibration mode' },
      { e: '🈶', t: 'japanese not free of charge' },
      { e: '🈚', t: 'japanese free of charge' },
      { e: '🈸', t: 'japanese application' },
      { e: '🈺', t: 'japanese open for business' },
      { e: '🈷️', t: 'japanese monthly amount' },
      { e: '✴️', t: 'eight pointed star' },
      { e: '🆚', t: 'vs versus' },
      { e: '💮', t: 'white flower' },
      { e: '🉐', t: 'japanese bargain' },
      { e: '㊙️', t: 'secret japanese' },
      { e: '㊗️', t: 'congratulations japanese' },
      { e: '🈴', t: 'japanese passing grade' },
      { e: '🈵', t: 'japanese no vacancy' },
      { e: '🈹', t: 'japanese discount' },
      { e: '🈲', t: 'japanese prohibited' },
      { e: '🅰️', t: 'a button blood type' },
      { e: '🅱️', t: 'b button blood type' },
      { e: '🆎', t: 'ab button blood type' },
      { e: '🆑', t: 'cl button clear' },
      { e: '🅾️', t: 'o button blood type' },
      { e: '🆘', t: 'sos help emergency' },
      { e: '❌', t: 'cross mark no wrong' },
      { e: '⭕', t: 'circle red' },
      { e: '🛑', t: 'stop sign' },
      { e: '⛔', t: 'no entry prohibited' },
      { e: '📛', t: 'name badge' },
      { e: '🚫', t: 'prohibited forbidden' },
      { e: '💯', t: 'hundred perfect score' },
      { e: '💢', t: 'anger symbol angry' },
      { e: '♨️', t: 'hotsprings hot' },
      { e: '🚷', t: 'no pedestrians' },
      { e: '🚯', t: 'no littering' },
      { e: '🚳', t: 'no bicycles' },
      { e: '🚱', t: 'no drinking water' },
      { e: '🔞', t: 'under eighteen nsfw' },
      { e: '🚭', t: 'no smoking' },
      { e: '❗', t: 'exclamation mark important' },
      { e: '❕', t: 'white exclamation' },
      { e: '❓', t: 'question mark what' },
      { e: '❔', t: 'white question' },
      { e: '‼️', t: 'double exclamation' },
      { e: '⁉️', t: 'interrobang exclamation question' },
      { e: '🔅', t: 'low brightness dim' },
      { e: '🔆', t: 'high brightness bright' },
      { e: '⚠️', t: 'warning caution alert' },
      { e: '🔱', t: 'trident emblem' },
      { e: '⚜️', t: 'fleur de lis' },
      { e: '🔰', t: 'japanese beginner' },
      { e: '♻️', t: 'recycle green' },
      { e: '✅', t: 'check mark done complete yes' },
      { e: '🈯', t: 'japanese reserved' },
      { e: '💹', t: 'chart yen growth' },
      { e: '❇️', t: 'sparkle' },
      { e: '✳️', t: 'eight asterisk' },
      { e: '❎', t: 'cross mark button' },
      { e: '🌐', t: 'globe world web' },
      { e: '💠', t: 'diamond with dot' },
      { e: 'Ⓜ️', t: 'circled m metro' },
      { e: '🌀', t: 'cyclone spiral dizzy' },
      { e: '💤', t: 'zzz sleep tired' },
      { e: '🏧', t: 'atm money bank' },
      { e: '🚾', t: 'water closet bathroom toilet' },
      { e: '♿', t: 'wheelchair accessible' },
      { e: '🅿️', t: 'parking p' },
      { e: '🈳', t: 'japanese vacancy' },
      { e: '🈂️', t: 'japanese service charge' }
    ]
  };

  const CATEGORY_ICONS = {
    'Smileys': '😀',
    'People': '👋',
    'Animals': '🐶',
    'Food': '🍕',
    'Travel': '🚗',
    'Activities': '🎮',
    'Objects': '💡',
    'Symbols': '❤️'
  };

  const FLAT_EMOJIS = [];
  for (const [cat, list] of Object.entries(EMOJIS)) {
    for (const item of list) FLAT_EMOJIS.push({ emoji: item.e, category: cat, tags: item.t });
  }

  let picker = null;
  let searchInput = null;
  let gridWrap = null;
  let grid = null;
  let activeCategory = Object.keys(EMOJIS)[0];
  let selectedIndex = 0;
  let filteredEmojis = [...FLAT_EMOJIS];
  let triggerTarget = null;
  let savedRange = null;

  function createPicker() {
    if (picker) return picker;

    picker = document.createElement('div');
    picker.id = 'slash-emoji-picker';

    const searchWrap = document.createElement('div');
    searchWrap.className = 'sep-search-wrap';
    searchInput = document.createElement('input');
    searchInput.className = 'sep-search';
    searchInput.placeholder = 'Search emoji\u2026';
    searchWrap.appendChild(searchInput);
    picker.appendChild(searchWrap);

    const catBar = document.createElement('div');
    catBar.className = 'sep-categories';
    for (const cat of Object.keys(EMOJIS)) {
      const btn = document.createElement('button');
      btn.className = 'sep-cat-btn' + (cat === activeCategory ? ' sep-active' : '');
      btn.textContent = CATEGORY_ICONS[cat];
      btn.title = cat;
      btn.dataset.category = cat;
      btn.addEventListener('click', () => switchCategory(cat));
      catBar.appendChild(btn);
    }
    picker.appendChild(catBar);

    gridWrap = document.createElement('div');
    gridWrap.className = 'sep-grid-wrap';
    grid = document.createElement('div');
    grid.className = 'sep-grid';
    gridWrap.appendChild(grid);
    picker.appendChild(gridWrap);

    const hint = document.createElement('div');
    hint.className = 'sep-hint';
    hint.innerHTML = '<span><kbd>\u2191\u2193\u2190\u2192</kbd> navigate</span><span><kbd>Enter</kbd> select</span><span><kbd>Esc</kbd> close</span>';
    picker.appendChild(hint);

    document.body.appendChild(picker);
    renderGrid();
    return picker;
  }

  function renderGrid() {
    grid.innerHTML = '';
    const emojis = filteredEmojis.filter(e => e.category === activeCategory);
    if (emojis.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'sep-empty';
      empty.textContent = 'No emoji found';
      grid.appendChild(empty);
      return;
    }
    emojis.forEach((item, i) => {
      const btn = document.createElement('button');
      btn.className = 'sep-emoji';
      btn.textContent = item.emoji;
      btn.dataset.index = i;
      if (i === selectedIndex) btn.classList.add('sep-selected');
      btn.addEventListener('mouseenter', () => {
        selectedIndex = i;
        updateSelection();
      });
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        insertEmoji(item.emoji);
      });
      grid.appendChild(btn);
    });
  }

  function switchCategory(cat) {
    activeCategory = cat;
    selectedIndex = 0;
    const catBtns = picker.querySelectorAll('.sep-cat-btn');
    catBtns.forEach(b => b.classList.toggle('sep-active', b.dataset.category === cat));
    renderGrid();
  }

  function updateSelection() {
    const btns = grid.querySelectorAll('.sep-emoji');
    btns.forEach((b, i) => b.classList.toggle('sep-selected', i === selectedIndex));
    if (btns[selectedIndex]) {
      btns[selectedIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  function filterEmojis(query) {
    if (!query) {
      filteredEmojis = [...FLAT_EMOJIS];
    } else {
      const q = query.toLowerCase().trim();
      filteredEmojis = FLAT_EMOJIS.filter(e =>
        e.tags.includes(q) || e.emoji.includes(q) || e.category.toLowerCase().includes(q)
      );
    }
    const catsWithResults = new Set(filteredEmojis.map(e => e.category));
    if (!catsWithResults.has(activeCategory)) {
      activeCategory = Object.keys(EMOJIS).find(c => catsWithResults.has(c)) || Object.keys(EMOJIS)[0];
    }
    const catBtns = picker.querySelectorAll('.sep-cat-btn');
    catBtns.forEach(b => b.classList.toggle('sep-active', b.dataset.category === activeCategory));
    selectedIndex = 0;
    renderGrid();
  }

  function positionPicker(target) {
    const rect = target.getBoundingClientRect ? target.getBoundingClientRect() : { bottom: window.innerHeight / 2, left: window.innerWidth / 2 };
    let top = rect.bottom + 6;
    let left = rect.left;

    const pw = 352, ph = 420;
    if (left + pw > window.innerWidth) left = window.innerWidth - pw - 12;
    if (left < 8) left = 8;
    if (top + ph > window.innerHeight) top = rect.top - ph - 6;
    if (top < 8) top = 8;

    picker.style.top = top + 'px';
    picker.style.left = left + 'px';
  }

  function insertEmoji(emoji) {
    const target = triggerTarget;
    const range = savedRange;
    closePicker();
    if (!target) return;
    try {
      if (target.isContentEditable) {
        target.focus();
        if (range) {
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
        document.execCommand('insertText', false, emoji);
      } else {
        target.focus();
        const start = target.selectionStart;
        const end = target.selectionEnd;
        target.value = target.value.slice(0, start) + emoji + target.value.slice(end);
        target.selectionStart = target.selectionEnd = start + emoji.length;
        target.dispatchEvent(new Event('input', { bubbles: true }));
      }
    } catch (e) { /* ignore */ }
  }

  function closePicker() {
    if (picker) {
      picker.remove();
      picker = null;
      searchInput = null;
      gridWrap = null;
      grid = null;
    }
    triggerTarget = null;
    savedRange = null;
  }

  function isOpen() {
    return picker !== null && document.body.contains(picker);
  }

  document.addEventListener('keydown', function (e) {
    const tag = (e.target.tagName || '').toLowerCase();
    const isEditable = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;

    if (e.key === '/' && isEditable && !e.ctrlKey && !e.metaKey && !e.altKey) {
      if (isOpen()) {
        e.preventDefault();
        const target = triggerTarget;
        const range = savedRange;
        closePicker();
        if (target) {
          target.focus();
          if (target.isContentEditable) {
            if (range) {
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            }
            document.execCommand('insertText', false, '/');
          } else {
            const pos = target.selectionStart;
            target.value = target.value.slice(0, pos) + '/' + target.value.slice(pos);
            target.selectionStart = target.selectionEnd = pos + 1;
            target.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }
        return;
      }
      e.preventDefault();
      triggerTarget = e.target;
      savedRange = null;
      if (e.target.isContentEditable) {
        const sel = window.getSelection();
        if (sel.rangeCount > 0) savedRange = sel.getRangeAt(0).cloneRange();
      }
      createPicker();
      positionPicker(e.target);
      searchInput.focus();
      return;
    }

    if (!isOpen()) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      const target = triggerTarget;
      closePicker();
      if (target) target.focus();
      return;
    }

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) {
      e.preventDefault();
      const visible = filteredEmojis.filter(em => em.category === activeCategory);

      if (e.key === 'ArrowRight') {
        selectedIndex = Math.min(selectedIndex + 1, visible.length - 1);
        updateSelection();
      } else if (e.key === 'ArrowLeft') {
        selectedIndex = Math.max(selectedIndex - 1, 0);
        updateSelection();
      } else if (e.key === 'ArrowDown') {
        selectedIndex = Math.min(selectedIndex + 9, visible.length - 1);
        updateSelection();
      } else if (e.key === 'ArrowUp') {
        selectedIndex = Math.max(selectedIndex - 9, 0);
        updateSelection();
      } else if (e.key === 'Enter') {
        if (visible[selectedIndex]) {
          insertEmoji(visible[selectedIndex].emoji);
        }
      }
      return;
    }
  });

  document.addEventListener('input', function (e) {
    if (e.target && e.target.classList && e.target.classList.contains('sep-search')) {
      selectedIndex = 0;
      filterEmojis(e.target.value);
    }
  }, true);

  document.addEventListener('mousedown', function (e) {
    if (isOpen() && picker && !picker.contains(e.target)) {
      const target = triggerTarget;
      closePicker();
      if (target && e.target !== target) target.focus();
    }
  }, true);

})();
