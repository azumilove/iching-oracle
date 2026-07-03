// I-Ching 64 Hexagrams — Complete Data
// Each hexagram: number, name_en, name_cn, symbol (Unicode), judgment, interpretation, wellness

const ICHING = [
  {
    n: 1, name: "The Creative", cn: "乾", symbol: "䷀",
    judgment: "The Creative works sublime success, furthering through perseverance.",
    interpretation: "This is the most yang, most powerful hexagram. You are in a phase of pure creative energy. The time is right to initiate, to lead, to act with boldness. But the Creative does not act blindly — it acts in harmony with the natural order. Perseverance is essential: do not abandon your path at the first obstacle. This is a time of great potential, but it demands discipline equal to its power.",
    wellness: "Practice the first movement of the Eight Brocades: 'Two Hands Hold Up the Heavens.' Raise both arms overhead, stretch upward, and breathe deeply. This opens the lung and large intestine meridians, harmonizing with the Metal element of Qian."
  },
  {
    n: 2, name: "The Receptive", cn: "坤", symbol: "䷁",
    judgment: "The Receptive brings about sublime success, furthering through the perseverance of a mare.",
    interpretation: "You are called not to lead, but to receive — and receiving is a power of its own. Like the earth that receives the seed and brings it to fruition, your strength lies in patience, nurturing, and holding space. Do not force outcomes. Let others take the initiative while you provide the fertile ground. There is great success here for those who understand the art of yielding.",
    wellness: "Focus on grounding practices. Stand with feet firmly planted, knees slightly bent, and imagine roots growing from your soles deep into the earth. This is the posture of the Receptive — stable, nourishing, immovable."
  },
  {
    n: 3, name: "Difficulty at the Beginning", cn: "屯", symbol: "䷂",
    judgment: "Difficulty at the Beginning works supreme success, furthering through perseverance. Nothing should be undertaken. It furthers one to appoint helpers.",
    interpretation: "Every birth is difficult. You are at the very start of something — a project, a relationship, a new phase of life — and chaos swirls around you. This is natural, not a sign of failure. Like a seedling pushing through soil, the darkness and pressure are part of the process. Do not rush ahead alone; seek helpers who can bring order. The chaos will clear.",
    wellness: "Practice gentle shaking of the whole body — let your limbs tremble freely for one minute. This releases stagnant qi and mimics the thunder (Zhen) that stirs new life in spring. Follow with a cup of warm water with ginger."
  },
  {
    n: 4, name: "Youthful Folly", cn: "蒙", symbol: "䷃",
    judgment: "Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me.",
    interpretation: "You are the student now, and the teacher will appear — but only when you are truly ready to receive. This hexagram speaks of a kind of holy ignorance: the state of not-knowing that precedes genuine learning. Do not pretend to understand what you do not. Ask the question. The answer will come from an unexpected source, but only if your inquiry is sincere.",
    wellness: "This is a time for quiet study, not vigorous practice. Sit in meditation for ten minutes. Let thoughts come and go like clouds. The mind of the beginner is the most receptive."
  },
  {
    n: 5, name: "Waiting", cn: "需", symbol: "䷄",
    judgment: "Waiting. If you are sincere, you have light and success. Perseverance brings good fortune. It furthers one to cross the great water.",
    interpretation: "You are standing at the edge of a river. The water is deep, the current uncertain. Do not wade in blindly. Wait for the right moment — it will come. This is not passive waiting but active preparation: gather your strength, clarify your intention, watch the water. When the path reveals itself, cross with confidence. The delay is not wasted time; it is the gathering of power.",
    wellness: "Stand in Wuji posture: feet shoulder-width, knees soft, tailbone tucked, spine straight, crown lifted. Breathe slowly into the lower dantian (below the navel). This is the posture of waiting — alert, relaxed, ready."
  },
  {
    n: 6, name: "Conflict", cn: "讼", symbol: "䷅",
    judgment: "Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune. Going through to the end brings misfortune.",
    interpretation: "You are in a dispute — with another person, an institution, or perhaps with yourself. The hexagram does not say you are wrong; it says continuing the conflict to its bitter end will harm you regardless of the outcome. Find the middle path. A compromise that feels incomplete is better than a victory that leaves you exhausted and alone. The wise person settles before reaching the courtroom door.",
    wellness: "When in conflict, qi rises to the head and chest, creating heat. Practice 'Descending the Qi': sit quietly, place both hands on your lower abdomen, and breathe out slowly through the mouth with a soft 'haaa' sound, imagining tension flowing down and out through the soles of your feet."
  },
  {
    n: 7, name: "The Army", cn: "师", symbol: "䷆",
    judgment: "The Army. The army needs perseverance and a strong man. Good fortune without blame.",
    interpretation: "You are mobilizing — gathering forces for a significant undertaking. This is not a solo mission; you need organization, discipline, and a clear chain of command. Choose your leader wisely. The army that moves without a strong center disintegrates. But with the right structure, even a small force can achieve great things. This hexagram favors collective action over individual brilliance.",
    wellness: "Organize your practice. Set a morning routine and stick to it for seven days. The discipline itself is the medicine. Like soldiers drilling, the repetition builds a strength that spontaneity cannot."
  },
  {
    n: 8, name: "Holding Together", cn: "比", symbol: "䷇",
    judgment: "Holding Together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance; then there is no blame.",
    interpretation: "You are seeking union — with a person, a community, an idea. First, examine yourself: are you coming from wholeness or from need? The hexagram asks you to check your own integrity before joining with others. True union happens between complete beings, not between fragments looking to be completed. If your foundation is solid, the alliance will flourish.",
    wellness: "Practice partner stretching or, if alone, hold a tree pose and imagine yourself connected to all other beings practicing stillness at this same moment. Unity begins with groundedness."
  },
  {
    n: 9, name: "The Taming Power of the Small", cn: "小畜", symbol: "䷈",
    judgment: "The Taming Power of the Small has success. Dense clouds, no rain from our western region.",
    interpretation: "You are accumulating small influences. Think of clouds gathering — they are real, they are building, but they have not yet released rain. You may feel frustrated: the breakthrough has not come, the results are invisible. But the accumulation IS the work. Small, consistent efforts are taming something large. Trust the process. The clouds will break when they are full enough.",
    wellness: "Focus on small, daily wellness habits rather than dramatic transformations. One extra glass of water. Five minutes of breathing. A short walk. These small taming forces, accumulated over time, reshape the body more profoundly than any extreme regimen."
  },
  {
    n: 10, name: "Treading", cn: "履", symbol: "䷉",
    judgment: "Treading upon the tail of the tiger. It does not bite the man. Success.",
    interpretation: "You are walking a dangerous path, but with the right conduct you will pass through unharmed. The tiger is powerful — it could be a difficult person, a risky situation, or your own untamed impulses. The key is to tread lightly, with awareness and respect. Do not provoke. Do not panic. Move with the quiet confidence of one who understands that the tiger is not an enemy but a force to be navigated.",
    wellness: "Practice 'Silent Walking' for ten minutes. Walk very slowly, feeling each part of each footstep — heel, arch, ball, toe. This cultivates the awareness that allows you to tread safely through any terrain."
  },
  {
    n: 11, name: "Peace", cn: "泰", symbol: "䷊",
    judgment: "Peace. The small departs, the great approaches. Good fortune. Success.",
    interpretation: "This is one of the most auspicious hexagrams. Heaven and Earth are in harmony, yang below rising to meet yin above. A time of effortless flow. The small obstacles that have been plaguing you are receding; great things are approaching. Enjoy this period. But remember: peace is dynamic, not static. It is the harmonious exchange between heaven and earth, not the absence of movement. Stay engaged.",
    wellness: "This is the ideal time for a full-body practice. Practice all eight movements of the Eight Brocades. The body is receptive and healing will be deep and swift. Pay special attention to the third movement: 'Separate Heaven and Earth' to harmonize the spleen and stomach."
  },
  {
    n: 12, name: "Standstill", cn: "否", symbol: "䷋",
    judgment: "Standstill. Evil people do not further the perseverance of the superior man. The great departs; the small approaches.",
    interpretation: "Heaven and Earth have separated. Communication has broken down. You may feel stuck, blocked, unable to make progress no matter what you try. The hexagram counsels: do not force things now. This is not the time for bold action. Retire, conserve your energy, and wait for the cycle to turn. Standstill is temporary. The superior person uses this time for inner cultivation rather than outer achievement.",
    wellness: "When outer progress is blocked, turn inward. Practice 'Embryonic Breathing': breathe so softly that a feather held before your nose would not stir. This nourishes the deepest reserves of qi. Also, examine your diet — avoid cold and raw foods during Standstill; favor warm, cooked, easily digested meals."
  },
  {
    n: 13, name: "Fellowship with Men", cn: "同人", symbol: "䷌",
    judgment: "Fellowship with Men in the open. Success. It furthers one to cross the great water. The perseverance of the superior man furthers.",
    interpretation: "You are finding your people. This hexagram speaks of community formed in openness — not behind closed doors, but in the broad light of day. The fellowship is based on shared values, not shared secrets. To cross the great water (to undertake something significant), you need allies. Look for them in open, public spaces. The bond you form now will sustain a major endeavor.",
    wellness: "Practice in a group or in nature, not alone. Join a class, find a walking partner, or simply do your practice in a park where others can see. The qi of community amplifies individual practice."
  },
  {
    n: 14, name: "Possession in Great Measure", cn: "大有", symbol: "䷍",
    judgment: "Possession in Great Measure. Supreme success.",
    interpretation: "You are abundant — and the hexagram's judgment is the shortest and most positive in the entire I Ching: 'Supreme success.' You possess something of great value: wealth, talent, knowledge, or spiritual attainment. The question is what you will do with it. Hoarding brings stagnation. The hexagram implies that true possession is measured not by what you hold but by what you give. Let it flow.",
    wellness: "Share your wellness knowledge. Teach someone a practice you have mastered. The act of teaching deepens your own embodiment. Generosity with what you possess — including your vitality — paradoxically increases it."
  },
  {
    n: 15, name: "Modesty", cn: "谦", symbol: "䷎",
    judgment: "Modesty creates success. The superior man carries things through.",
    interpretation: "The mountain stands beneath the earth — the highest thing placed below the lowest. This is the image of modesty: not self-deprecation, but the quiet confidence that does not need to announce itself. You are being asked to reduce your profile without reducing your substance. Let your work speak. The modest person attracts help from all sides while the boastful person repels it.",
    wellness: "Practice 'Bowing' — not as exercise but as attitude. From standing, fold forward slowly, vertebra by vertebra, letting the head hang heavy. Stay for ten breaths. This posture of humility opens the bladder meridian along the spine and quiets the ego."
  },
  {
    n: 16, name: "Enthusiasm", cn: "豫", symbol: "䷏",
    judgment: "Enthusiasm. It furthers one to install helpers and to set armies marching.",
    interpretation: "Thunder rolls across the earth, and all things stir. You are feeling a surge of energy, excitement, motivation. This is a powerful force, but it must be channeled. Enthusiasm without direction is mere noise. The hexagram advises: use this energy to organize (install helpers) and to act (set armies marching). Enthusiasm is the spark; structure is the engine.",
    wellness: "Channel enthusiasm physically. Dance, run, practice dynamic qigong. Let the thunder move through your body. If you try to sit still now, the energy will turn to restlessness. Move first, then settle."
  },
  {
    n: 17, name: "Following", cn: "随", symbol: "䷐",
    judgment: "Following has supreme success. Perseverance furthers. No blame.",
    interpretation: "You are being called to follow — not to lead, not to resist, but to adapt yourself to the movement of the moment. Following is not weakness; it is the art of sensing the current and moving with it rather than against it. The hexagram promises success to those who let go of their own agenda and respond flexibly to what is arising. The question is: what or whom should you follow? Choose your model wisely.",
    wellness: "Follow your body's signals today. Eat when hungry, rest when tired, move when restless. Do not impose a schedule or a plan. This is a day for intuitive self-care — the body knows what it needs if you listen."
  },
  {
    n: 18, name: "Work on What Has Been Spoiled", cn: "蛊", symbol: "䷑",
    judgment: "Work on What Has Been Spoiled has supreme success. It furthers one to cross the great water. Before the starting point, three days. After the starting point, three days.",
    interpretation: "Something has decayed — a relationship, a project, a habit, an inherited situation. The rot is not your fault (it comes from the past, perhaps from those before you), but the repair is your responsibility. This is difficult, unglamorous work, but the hexagram promises supreme success. Three days of preparation, three days of consolidation. Approach the spoiled thing with patience. The great water can be crossed.",
    wellness: "This is a time for detoxification — literally or metaphorically. Clean your diet for three days. Declutter your living space. Examine what you have inherited (genetically, culturally, familially) and consciously choose what to keep and what to release. The sages call this 'removing the three corpses.'"
  },
  {
    n: 19, name: "Approach", cn: "临", symbol: "䷒",
    judgment: "Approach has supreme success. Perseverance furthers. When the eighth month comes, there will be misfortune.",
    interpretation: "Something great is approaching — an opportunity, a person, a breakthrough. The energy is rising (yang is ascending from below). Seize the moment: the hexagram counsels action now, while the tide is rising. But it also contains a warning: the approach has a season. By the eighth month, the energy will have turned. Act while the approach is favorable; do not delay thinking the door will stay open forever.",
    wellness: "Ride the rising energy. Begin a new wellness practice now, while yang is ascendant. Morning practice is especially potent during the Approach phase. But pace yourself — the warning about the eighth month reminds us not to overextend."
  },
  {
    n: 20, name: "Contemplation", cn: "观", symbol: "䷓",
    judgment: "Contemplation. The ablution has been made, but not yet the offering.",
    interpretation: "You are in the position of the observer — watching, reflecting, not yet acting. The hexagram image: a tower from which one surveys the land. You have purified yourself (the ablution), but you have not yet made your offering (the action). This is a sacred pause. Contemplate deeply before committing. What you see from this vantage point will determine the wisdom of your next move.",
    wellness: "Practice 'Inner Smile' meditation. Sitting quietly, bring a gentle smile to your face, then direct that smile inward to each organ: heart, lungs, liver, spleen, kidneys. Observe without judgment. This is the wellness of contemplation — seeing clearly before acting."
  },
  {
    n: 21, name: "Biting Through", cn: "噬嗑", symbol: "䷔",
    judgment: "Biting Through has success. It furthers one to render justice.",
    interpretation: "There is an obstacle, and it must be removed by force. Something is stuck between your teeth — a difficult conversation, a stubborn problem, a person blocking your path. The hexagram says: bite down. Not savagely, but decisively. The obstacle will not dissolve on its own. Once you bite through, there is success. This hexagram is associated with legal matters and the rendering of justice.",
    wellness: "The jaw is the seat of unexpressed anger and unspoken truth. Practice conscious jaw release: open your mouth wide, then let it close slowly. Massage the jaw muscles. Then speak something you have been holding back — to yourself, in a journal, or to the person concerned."
  },
  {
    n: 22, name: "Grace", cn: "贲", symbol: "䷕",
    judgment: "Grace has success. In small matters, it furthers one to undertake something.",
    interpretation: "Fire at the foot of the mountain illuminates its form. This is the hexagram of beauty, adornment, and form. It favors aesthetic matters, ceremonies, and the cultivation of style. But it carries a caution: grace is for small matters. Do not confuse surface beauty with substance. In important things, rely on content, not packaging. Grace enhances what is already solid; it cannot replace it.",
    wellness: "Attend to the aesthetics of your practice space. Light a candle, arrange fresh flowers, play soft music. Beauty is not frivolous — it nourishes the spirit in ways that pure utility cannot. Also: pay attention to your posture. Graceful alignment is the foundation of health."
  },
  {
    n: 23, name: "Splitting Apart", cn: "剥", symbol: "䷖",
    judgment: "Splitting Apart. It does not further one to go anywhere.",
    interpretation: "The mountain is crumbling. The foundation is being eroded. This hexagram appears when something is falling apart — a structure, a relationship, a career, a belief system. The advice is stark: do not go anywhere, do not try to fix it, do not cling. The splitting is necessary; it clears away what was no longer sound. Let it fall. The superior person uses this time to rest and accumulate new strength from below.",
    wellness: "Rest. Deep, unapologetic rest. Cancel commitments. Sleep more. The body may be 'splitting apart' old patterns of tension and toxicity. Support the process with warm baths, gentle stretching, and nourishing soups. Do not fight the collapse — it is clearing space for something new."
  },
  {
    n: 24, name: "Return", cn: "复", symbol: "䷗",
    judgment: "Return. Success. Going out and coming in without error. Friends come without blame. The way of the Tao ascends and descends. On the seventh day comes return.",
    interpretation: "The light returns. After the darkest point of winter, a single yang line appears at the bottom — the first stirring of renewal. This is one of the most hopeful hexagrams. Whatever was lost or depleted is returning. The turn happens on the seventh day (or the seventh month, or the seventh phase). Rest now, and let the return happen naturally. Do not rush out — the yang energy is still fragile. Nurture it.",
    wellness: "This is the winter solstice hexagram. Even if it's not literally winter, treat yourself to a 'solstice rest': early to bed, late to rise, minimal exertion. The returning energy is like a newborn flame — protect it. A single session of deep rest now is worth ten sessions of forced effort."
  },
  {
    n: 25, name: "Innocence", cn: "无妄", symbol: "䷘",
    judgment: "Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune, and it does not further him to undertake anything.",
    interpretation: "You are in a state of natural, unforced alignment — acting not from calculation but from spontaneous correctness. This is a powerful and rare condition. Success comes without striving because your actions are in harmony with the way things are. But the hexagram warns: this only works if you are truly innocent (without artifice or hidden agenda). Any attempt to manipulate from this state will backfire.",
    wellness: "Practice spontaneous movement (ziran qigong). Stand relaxed, close your eyes, and let your body move however it wants — no choreography, no plan. This is the body in its natural, innocent state. Trust whatever arises."
  },
  {
    n: 26, name: "The Taming Power of the Great", cn: "大畜", symbol: "䷙",
    judgment: "The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune. It furthers one to cross the great water.",
    interpretation: "You are accumulating great power — more than the 'small taming' of hexagram 9. This is the power of wisdom, virtue, and inner cultivation. The hexagram advises: go out into the world ('not eating at home'). Your accumulated power is meant to be used, not hoarded. You are ready to cross the great water. The greatness you have tamed within can now be offered without.",
    wellness: "This hexagram favors vigorous practice. Your body has accumulated capacity — now use it. Longer sessions, stronger stances, deeper stretches. 'Not eating at home' also suggests: try a new practice or teacher. Go outside your usual wellness routine."
  },
  {
    n: 27, name: "The Corners of the Mouth", cn: "颐", symbol: "䷚",
    judgment: "The Corners of the Mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment, and to what a man seeks to fill his own mouth with.",
    interpretation: "This is the hexagram of nourishment — both physical and spiritual. Watch what you take in: food, words, media, company. Are you nourishing yourself or merely filling yourself? The hexagram also asks: what are you nourishing in others? A teacher, a parent, a leader — all are providers of nourishment. Provide wisely. The mouth is the gate between inner and outer; guard it well.",
    wellness: "Examine your diet with fresh eyes. Eat one meal in complete silence, chewing each mouthful thoroughly. Taste every flavor. Ask yourself: is this nourishing me? Also: nourish your speech. Speak fewer words today, but make each one nourishing."
  },
  {
    n: 28, name: "Preponderance of the Great", cn: "大过", symbol: "䷛",
    judgment: "Preponderance of the Great. The ridgepole sags. It furthers one to have somewhere to go. Success.",
    interpretation: "The structure is under too much pressure — the ridgepole is bending. You may be carrying too much responsibility, too much weight. Something must shift before it breaks. The hexagram counsels: have somewhere to go. Do not stay under the sagging beam. Move. A change of position, of perspective, of circumstance will relieve the pressure. The situation is critical but not hopeless.",
    wellness: "If you have been over-training or over-working, ease off immediately. The body's ridgepole (the spine) is signaling strain. Gentle traction: lie on your back with knees bent, and slowly rock the pelvis. Also: take a day trip. Physical relocation shifts the energetic burden."
  },
  {
    n: 29, name: "The Abysmal", cn: "坎", symbol: "䷜",
    judgment: "The Abysmal repeated. If you are sincere, you have success in your heart, and whatever you do succeeds.",
    interpretation: "Water doubles upon water — the image of the abyss. You are in deep water, facing danger or uncertainty. This is the most yin of the eight trigrams, representing the darkest, most mysterious phase. Yet the judgment is not entirely negative: if your heart is sincere, you will pass through. The abyss teaches what the mountain cannot. Flow like water: adapt to every contour, and you will find a way through.",
    wellness: "Work with the Water element. Drink more water than usual. Practice near water if possible — a bath, a river, even a fountain. The kidneys are the water organ in Chinese medicine; support them with warm foot soaks before bed and by avoiding fear-based thoughts."
  },
  {
    n: 30, name: "The Clinging", cn: "离", symbol: "䷝",
    judgment: "The Clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune.",
    interpretation: "Fire clings to its fuel — without something to burn, it goes out. You are in a phase of brightness, clarity, and illumination, but you must understand your dependence. What are you clinging to? What sustains your fire? The hexagram counsels: tend to what supports you (the 'cow' — a symbol of gentle, nurturing energy). Clarity is sustained by the humble work of maintenance.",
    wellness: "Focus on the heart (the Fire organ). Practice the 'Ha' sound from the Six Healing Sounds: inhale, and on the exhale make a soft 'Haaaaa' sound, feeling heat and tension release from the chest. Also: gratitude practice. The heart's fire burns brightest when fed with appreciation."
  },
  {
    n: 31, name: "Influence", cn: "咸", symbol: "䷞",
    judgment: "Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune.",
    interpretation: "The mountain rests above the lake — an image of attraction and influence. This hexagram governs relationships, courtship, and the subtle art of affecting others without force. You are being influenced, or you are influencing someone else. The key is gentleness: the mountain does not move the lake by pushing; it moves it by being still and solid, allowing the lake's own waters to respond. In love and partnership, be the mountain.",
    wellness: "Practice partner massage or self-massage with mindful attention. Touch is the language of Influence. Even self-applied oil on the feet before bed, done with full presence, opens the channels of reciprocal energy flow."
  },
  {
    n: 32, name: "Duration", cn: "恒", symbol: "䷟",
    judgment: "Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go.",
    interpretation: "Thunder and wind — the union of movement and penetration — create duration. This hexagram is about what endures: marriage, institutions, long-term commitments. The key insight: duration is not static. The thunder rolls, the wind blows — it is the patterned renewal of these dynamic forces that creates lasting stability. Your commitment must be renewed daily, not frozen in place.",
    wellness: "Establish one non-negotiable daily practice and protect it for thirty days. It can be tiny — five minutes of breathing. Duration is built not by intensity but by the refusal to skip. The thunder of discipline and the wind of flexibility must work together."
  },
  {
    n: 33, name: "Retreat", cn: "遯", symbol: "䷠",
    judgment: "Retreat. Success. In what is small, perseverance furthers.",
    interpretation: "The dark forces are rising. The mountain stands under heaven, but the yin lines are advancing upward — you are being pushed back. This is not defeat; it is strategic withdrawal. Retreat while you still have the strength to do so gracefully. In small matters, you can still persevere. Do not fight a battle you cannot win. The mountain knows when to let the mist cover its peak.",
    wellness: "Pull back from strenuous practice. This is not laziness; it is the wisdom of the mountain retreating into winter. Focus on restorative yoga, yin yoga, or simply walking. Small, consistent efforts (five minutes of stretching) are better than grand gestures now."
  },
  {
    n: 34, name: "The Power of the Great", cn: "大壮", symbol: "䷡",
    judgment: "The Power of the Great. Perseverance furthers.",
    interpretation: "Thunder in heaven above — great power in motion. Four yang lines are rising strongly. You are in a position of strength. But the hexagram contains a subtle warning: great power must be paired with great correctness. Raw force without righteousness is merely violence. Use your strength in alignment with what is right, not merely what is possible. The truly powerful do not need to display their power.",
    wellness: "This is the time for strong practice — but form must be correct. Do not sacrifice alignment for intensity. The goat (symbol of this hexagram) will butt its head against anything; be smarter than the goat. Train hard, but train correctly. A single perfect push-up is worth ten sloppy ones."
  },
  {
    n: 35, name: "Progress", cn: "晋", symbol: "䷢",
    judgment: "Progress. The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times.",
    interpretation: "The sun rises over the earth — the image of steady, visible progress. You are advancing. Recognition is coming. The 'powerful prince' is honored with gifts and repeated audiences. This hexagram promises a period of rapid advancement and public acknowledgment. But the progress is based on genuine merit, not manipulation. The sun rises because it is the sun; it does not scheme to climb the sky.",
    wellness: "Your practice is bearing visible fruit. Others may notice your improved energy and presence. This is encouraging, but do not practice for recognition. Continue the steady work. Morning practice is especially auspicious — greet the rising sun with your own rising yang."
  },
  {
    n: 36, name: "Darkening of the Light", cn: "明夷", symbol: "䷣",
    judgment: "Darkening of the Light. In adversity it furthers one to be persevering.",
    interpretation: "The light has sunk below the earth. This is a hexagram of injury and eclipse — your light is not welcome in the current environment. The superior person, in a time of darkness, hides their brilliance. This is not cowardice; it is survival. Persevere in adversity by being inconspicuous. The darkness will pass, but until it does, protect your light rather than exposing it to those who would extinguish it.",
    wellness: "Practice in darkness or low light. Before sunrise, or in a dim room. This is not gloomy — it is protective. Let your inner light (the ming, 明) cultivate itself in hiding. Also: check your exposure to toxins — environmental, dietary, relational. The 'darkening' may be a call to reduce your toxic load."
  },
  {
    n: 37, name: "The Family", cn: "家人", symbol: "䷤",
    judgment: "The Family. The perseverance of the woman furthers.",
    interpretation: "Wind rises from fire — the image of the family, where warmth is carried outward by the breath of daily life. This hexagram addresses the home, the family, and the inner circle. A family is held together not by laws but by the steady, consistent nurturing of relationships. The 'perseverance of the woman' refers to the inner, sustaining power — regardless of gender. Attend to your home. Nurture your closest relationships.",
    wellness: "Cook a meal for yourself or your household with full attention. Family wellness begins in the kitchen. The fire (heart) and wind (gentle persistence) of this hexagram suggest: make your food with love, eat it with presence. Also: examine family health patterns. Are there inherited tendencies you can address?"
  },
  {
    n: 38, name: "Opposition", cn: "睽", symbol: "䷥",
    judgment: "Opposition. In small matters, good fortune.",
    interpretation: "Fire above, lake below — two elements that naturally separate. You are in a situation of opposition: a disagreement, a misunderstanding, divergent paths. The hexagram counsels: do not try to force unity where it does not naturally exist. In small matters, there can still be harmony. Accept the differences. Opposition, handled wisely, can lead to creative tension rather than destructive conflict.",
    wellness: "Work with opposing forces in the body. Left side vs. right side — are you balanced? Practice unilateral exercises: single-leg stance, one-arm stretches. Notice where your body is 'in opposition' to itself. Also: reconcile opposites in your diet. If you have been eating too much of one thing (hot, cold, dry, damp), introduce its opposite."
  },
  {
    n: 39, name: "Obstruction", cn: "蹇", symbol: "䷦",
    judgment: "Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man. Perseverance brings good fortune.",
    interpretation: "Water on the mountain, above a chasm — the path is blocked. You have hit an obstacle that you cannot overcome by direct assault. The hexagram gives precise advice: go southwest (the direction of the Receptive, of yielding, of community), not northeast (the direction of solitary effort). Seek a mentor or guide (the 'great man'). The obstruction is real but it is also a teacher — it redirects you toward the right path.",
    wellness: "When the body hits an obstruction — an injury, a plateau, chronic pain — do not push through it. Go 'southwest': seek help from a practitioner, a teacher, a wiser version of yourself. Rest the injured part while strengthening the surrounding areas. The obstruction is protecting you from worse harm."
  },
  {
    n: 40, name: "Deliverance", cn: "解", symbol: "䷧",
    judgment: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, return brings good fortune. If there is still something where one has to go, hastening brings good fortune.",
    interpretation: "Thunder and rain clear the air — deliverance after tension. The obstruction has been removed. You are free. If the work is done, come home and rest. If there is still unfinished business, move quickly while the window is open. The hexagram marks a moment of release: forgiveness granted, the problem solved, the danger passed. Do not linger in the aftermath — move forward or rest, but do not dwell.",
    wellness: "Your body has released something — possibly an old tension pattern, possibly an illness. Support the release with gentle movement (like the thunder clearing the air) and hydration (like the rain). Do not immediately test the new freedom with extreme exertion. Let the deliverance settle."
  },
  {
    n: 41, name: "Decrease", cn: "损", symbol: "䷨",
    judgment: "Decrease combined with sincerity brings about supreme good fortune without blame. One may be persevering in this. It furthers one to undertake something.",
    interpretation: "The mountain stands above the lake — the mountain decreases itself to nourish the lake below. Decrease can be a blessing. You may be called to give something up: a possession, a habit, a relationship, a belief. The decrease must be sincere, not performed for show. When decrease is accepted with sincerity, it leads to supreme good fortune. True decrease is the thinning that allows essence to emerge.",
    wellness: "Practice fasting — not necessarily from food, but from something: screens, caffeine, sugar, complaining. Decrease one thing for a defined period. The body and spirit thrive on voluntary renunciation. Also: simplify your practice. Remove one exercise or technique. What remains will deepen."
  },
  {
    n: 42, name: "Increase", cn: "益", symbol: "䷩",
    judgment: "Increase. It furthers one to undertake something. It furthers one to cross the great water.",
    interpretation: "Wind and thunder reinforce each other — the image of increase. This is a time of expansion, growth, and gain. Opportunities are opening. But the hexagram contains a subtle guidance: true increase comes from receiving what is above and passing it to what is below. If you see good, imitate it. If you have advantage, share it. Increase that is hoarded turns to decrease. Increase that flows, multiplies.",
    wellness: "Add something to your practice — a new stretch, an extra round, a longer meditation. The body is receptive to growth now. But increase wisely: one new thing, fully integrated, not ten things superficially tried. Also: share your wellness. Teach a friend one thing you have learned."
  },
  {
    n: 43, name: "Breakthrough", cn: "夬", symbol: "䷪",
    judgment: "Breakthrough. One must resolutely make the matter known at the court of the king. It must be announced truthfully. Danger. It is necessary to notify one's own city. It does not further to resort to arms. It furthers one to undertake something.",
    interpretation: "A single yin line at the top, with five yang lines rising beneath — the decisive moment. Something that has been lingering (a bad habit, a toxic relationship, a corrupt element) is about to be expelled. But the breakthrough requires public commitment: announce it. Do not do it secretly. The hexagram warns against violence (arms) — the expulsion must be righteous and transparent, not aggressive. Once the decision is made, act.",
    wellness: "Make a public commitment to a health change. Tell someone your intention. The 'announcement' is itself part of the healing. Also: this hexagram favors a decisive break — quitting something outright rather than tapering. The single yin line at the top is ready to fall; one clean cut is better than prolonged surgery."
  },
  {
    n: 44, name: "Coming to Meet", cn: "姤", symbol: "䷫",
    judgment: "Coming to Meet. The maiden is powerful. One should not marry such a maiden.",
    interpretation: "Wind blowing beneath heaven — the image of encounter, of meeting unexpectedly. A single yin line appears at the bottom, and the hexagram names it as a powerful maiden. You are encountering something — a person, an idea, a temptation — that is potent but potentially dangerous. The hexagram warns: do not bind yourself to this encounter. The maiden is powerful, but she is not for marrying. Enjoy the meeting, learn from it, but do not build your house on it.",
    wellness: "A new influence has entered your life — a diet trend, a supplement, a teacher, a practice. Approach it with curiosity but not with blind commitment. The 'powerful maiden' can seduce you away from your foundation. Try it, but do not abandon what has proven itself over time."
  },
  {
    n: 45, name: "Gathering Together", cn: "萃", symbol: "䷬",
    judgment: "Gathering Together. Success. The king approaches his temple. It furthers one to see the great man. This brings success. Perseverance furthers. To bring great offerings creates good fortune. It furthers one to undertake something.",
    interpretation: "The lake gathers above the earth — the image of assembly, of community coming together around a sacred center. You are being called to gather with others for a meaningful purpose. The 'king approaches his temple' — approach the sacred together. Bring offerings (your gifts, your presence, your effort). A great gathering has its own power, exceeding the sum of its parts. This hexagram favors collective ritual, celebration, and collaborative work.",
    wellness: "Gather with others for practice. Attend a class, join a group hike, practice in community. The qi of many bodies practicing together amplifies individual effort. Also: gather your scattered energies. Use a simple ritual — lighting a candle, setting an intention — to unify your focus before practice."
  },
  {
    n: 46, name: "Pushing Upward", cn: "升", symbol: "䷭",
    judgment: "Pushing Upward has supreme success. One must see the great man. Fear not. Departure toward the south brings good fortune.",
    interpretation: "Wood grows upward through the earth — a gentle, organic ascent. You are rising, but gradually, naturally, like a tree. This is not a sudden breakthrough (that was hexagram 43) but steady, sustained growth. Seek a mentor (the 'great man'). Do not be afraid — the ascent is supported by the very structure of things. Move toward warmth and light (the south). Your growth is inevitable if you do not resist it.",
    wellness: "This hexagram mirrors the body's natural healing trajectory — slow, steady, upward. Support your body's innate push toward health: eat clean, sleep deep, move daily. You don't need to force healing; you need to remove the obstacles. Trees do not strain to grow; they simply grow."
  },
  {
    n: 47, name: "Oppression", cn: "困", symbol: "䷮",
    judgment: "Oppression. Success. Perseverance. The great man brings about good fortune. No blame. When one has something to say, it is not believed.",
    interpretation: "The lake is above the water — the lake is empty, the water below is inaccessible. You are oppressed, exhausted, drained. Your words are not believed; your efforts go unrecognized. This is one of the darkest hexagrams, and yet its judgment begins with 'Success.' The oppression itself, endured correctly, is the medicine. Do not complain (it will not be heard). Do not give up. The great man — the inner sage — remains unshaken even when the outer self is pressed on all sides.",
    wellness: "You may feel depleted. The body is under some form of oppression — stress, illness, overwork. Do not fight it. The hexagram says: your words are not believed — so do not waste energy explaining how you feel. Simply care for yourself quietly. Restorative practice only. In bed by nine. The oppression will pass, and the endurance it builds will serve you later."
  },
  {
    n: 48, name: "The Well", cn: "井", symbol: "䷯",
    judgment: "The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases. They come and go and draw from the well. If one gets down almost to the water and the rope does not go all the way, or the jug breaks, that brings misfortune.",
    interpretation: "The well is the unchanging source at the center of the changing village. You are being asked to go deep — to access the perennial source beneath the surface fluctuations of your life. The well is always there, always full, always available. But you must lower the bucket all the way. Superficial efforts will not reach the water. The warning is stark: if you stop just short of the source, or if your vessel breaks (your integrity fails), there is misfortune.",
    wellness: "Go to the well of your own body's wisdom. This means going deep — not just stretching, but feeling. Not just exercising, but inhabiting. A single deep breath that reaches the dantian is worth more than an hour of shallow practice. Also: drink from actual wells. Find the best water you can access. The body is mostly water; change the water, change the body."
  },
  {
    n: 49, name: "Revolution", cn: "革", symbol: "䷰",
    judgment: "Revolution. On your own day you are believed. Supreme success, furthering through perseverance. Remorse disappears.",
    interpretation: "Fire in the lake — water and fire do not coexist peacefully. When fire enters the lake, the water must transform. You are in a time of necessary, fundamental change. Not reform, but revolution. The old order must be overturned. But the hexagram specifies: 'on your own day' — the revolution's timing must be right. When the moment comes, you will be believed. Do not rush into revolution before the signs are clear. But when they are, act without hesitation.",
    wellness: "A radical change to your health regimen may be called for. Not a tweak, but a transformation — a new diet, a new practice, quitting something permanently. The hexagram says 'remorse disappears' — whatever guilt or doubt has been holding you back from this change will dissolve once you commit. The fire of resolve must enter the water of habit."
  },
  {
    n: 50, name: "The Cauldron", cn: "鼎", symbol: "䷱",
    judgment: "The Cauldron. Supreme good fortune. Success.",
    interpretation: "Fire over wood — the image of the ritual bronze cauldron in which food is cooked for the ancestors and the gods. This is the hexagram of transformation through culture and refinement. You are being 'cooked' — your raw self is being transformed into something nourishing for the world. The cauldron is also a symbol of civilization itself. Your calling is to take the raw ingredients of your life and, through the fire of discipline and the wood of sustained effort, create something that feeds others.",
    wellness: "Your body is the cauldron. What are you cooking in it? The food you eat, the air you breathe, the thoughts you think — all are ingredients placed into the cauldron. Cook them well. Favor warm, cooked foods over raw and cold. The spleen and stomach are the fire-under-the-cauldron; support them with ginger, cinnamon, and regular meal times."
  },
  {
    n: 51, name: "The Arousing", cn: "震", symbol: "䷲",
    judgment: "The Arousing brings success. Thunder comes — oh, oh! Laughing words — ha, ha! The thunder terrifies for a hundred miles, but the superior man does not let fall the sacrificial spoon and chalice.",
    interpretation: "Thunder doubled — shock upon shock. Something has startled you, shaken your foundations. The first reaction is fear ('oh, oh!'), but the second is laughter ('ha, ha!') as you realize the shock has not destroyed you. The hexagram speaks of the person who remains centered amid disruption — the sacrificial implements do not fall because the inner composure is unshaken. Whatever has startled you is ultimately a teacher, waking you from complacency.",
    wellness: "Shock to the body — an accident, a diagnosis, a sudden pain — is the Arousing. The initial fear is natural, but do not let it become chronic. The body's stress response is meant to be acute, not sustained. Practice shaking: stand and shake your whole body vigorously for one minute, then stop and feel the vibration settle. This teaches the nervous system the natural arc of arousal and return."
  },
  {
    n: 52, name: "Keeping Still", cn: "艮", symbol: "䷳",
    judgment: "Keeping Still. Keeping his back still so that he no longer feels his body. He goes into the courtyard and does not see his people. No blame.",
    interpretation: "Mountain upon mountain — stillness doubled. The hexagram counsels absolute stillness, to the point where you no longer feel your body. This is the stillness not of death but of deep meditation. The sage goes into the courtyard and does not see his people — the external world has fallen away. When the mind stops grasping and the body stops moving, something else becomes available. This is the hexagram of meditation, retreat, and the still point at the center of the turning world.",
    wellness: "Practice deep stillness. Not gentle movement, not restorative yoga — absolute stillness. Lie on your back, arms at your sides, palms up. Do not move a single muscle for ten minutes. Let the body become a mountain. This is profoundly restorative for the nervous system. The back (governed by this hexagram) is the seat of the autonomic nervous system; stillness here resets everything."
  },
  {
    n: 53, name: "Development", cn: "渐", symbol: "䷴",
    judgment: "Development. The maiden is given in marriage. Good fortune. Perseverance furthers.",
    interpretation: "Wind over the mountain, a tree growing on the mountainside — slow, steady, organic development. This hexagram speaks of gradual progress, like the courtship that leads to marriage. Nothing is rushed. Each step establishes the foundation for the next. You are developing something — a skill, a relationship, a career, a practice — and the key is patience. The tree on the mountain does not grow overnight, but it grows deep and strong.",
    wellness: "Your health journey is a slow development, not a quick fix. Do not compare your progress to others. The tree on the mountain grows at its own pace and is all the stronger for it. Focus on one practice and develop it deeply rather than jumping between modalities. Consistency over intensity."
  },
  {
    n: 54, name: "The Marrying Maiden", cn: "归妹", symbol: "䷵",
    judgment: "The Marrying Maiden. Undertakings bring misfortune. Nothing that would further.",
    interpretation: "Thunder over the lake — a young woman entering a marriage not as primary wife but as secondary. This is the hexagram of accepting a subordinate role, of entering a situation on someone else's terms. You may be tempted to take what is offered even though it is not what you deserve. The hexagram warns: this path brings misfortune. Do not compromise your essential dignity for a place at the table. Better to wait for the right opening than to accept the wrong one.",
    wellness: "Do not accept a second-rate wellness protocol — a fad diet, a guru who demands submission, a 'quick fix' that compromises your long-term health. Your body is the primary wife, not the concubine. Treat it with the respect it deserves. If something feels off, it is."
  },
  {
    n: 55, name: "Abundance", cn: "丰", symbol: "䷶",
    judgment: "Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday.",
    interpretation: "Thunder and lightning together — the peak of power and illumination, the sun at noon. You are in a period of abundance and fullness. But the hexagram carries a hidden warning: the sun at midday begins its descent. Enjoy the abundance, but do not grieve that it cannot last forever ('be not sad'). The wise person, at the peak, prepares for the descent without clinging. Abundance is to be celebrated and shared, not hoarded in fear of its passing.",
    wellness: "Your energy is high, your body is responding well — this is the noon of your wellness cycle. Use it. Train with vigor. But do not burn out by trying to keep the sun at its peak. The body needs its seasons. Enjoy the abundance, then let it naturally wane into rest. Also: share your abundant energy — help someone who is struggling."
  },
  {
    n: 56, name: "The Wanderer", cn: "旅", symbol: "䷷",
    judgment: "The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer.",
    interpretation: "Fire on the mountain — a campfire on a strange hillside. You are a wanderer, a stranger in a foreign place (literal or metaphorical). You do not have the protection of home and community. The hexagram counsels: succeed through smallness. Do not assert yourself boldly in unfamiliar territory. Be humble, adaptable, and quick to read the local customs. The wanderer who travels light and treads softly finds good fortune.",
    wellness: "If you are traveling, maintain a minimal practice. Five minutes of breathing, a few stretches — 'success through smallness.' Do not abandon your practice, but adapt it to your circumstances. The wanderer's body is under the stress of unfamiliar environments; small, consistent practices are more protective than sporadic intense sessions."
  },
  {
    n: 57, name: "The Gentle", cn: "巽", symbol: "䷸",
    judgment: "The Gentle. Success through what is small. It furthers one to have somewhere to go. It furthers one to see the great man.",
    interpretation: "Wind upon wind — the penetrating power of gentleness. This hexagram teaches that the softest thing overcomes the hardest. Wind does not break the oak by force; it wears it down by persistence. You are being asked to influence a situation not through confrontation but through gentle, sustained pressure. Small, consistent efforts will penetrate where a single grand gesture would fail. Find the great man (the teacher, the mentor) who understands this way.",
    wellness: "Gentle, sustained practice penetrates deeper than intense, sporadic effort. The wind does not blow one fierce gust and stop; it blows steadily. Your practice should be the same. Also: this hexagram governs the liver and gallbladder in Chinese medicine — the organs associated with the Wood element and the wind. Support your liver with sour foods, gentle twisting, and the release of repressed anger."
  },
  {
    n: 58, name: "The Joyous", cn: "兑", symbol: "䷹",
    judgment: "The Joyous. Success. Perseverance is favorable.",
    interpretation: "Lake upon lake — doubled joy, doubled openness. This hexagram speaks of delight, pleasure, and the free exchange of energy between people. Joy is not frivolous; it is one of the fundamental qualities of the Tao. The hexagram counsels: gather with friends, share pleasure, speak openly. But the joy must be rooted in inner truth, not in distraction or escapism. True joy is the spontaneous radiance of a heart at peace.",
    wellness: "Joy is medicine. Laugh more. Practice with music you love. Dance. The Joyous governs the lungs in Chinese medicine — the organ of grief and its release. If you have been holding sadness, let it go through joy. Also: social wellness. Spend time with people who make you laugh. The doubled lake is the image of friends reflecting each other's happiness."
  },
  {
    n: 59, name: "Dispersion", cn: "涣", symbol: "䷺",
    judgment: "Dispersion. Success. The king approaches his temple. It furthers one to cross the great water. Perseverance furthers.",
    interpretation: "Wind over water — the wind disperses the water into mist, dissolving what was solid. This hexagram speaks of dissolution: rigid structures, frozen emotions, hardened beliefs are being dispersed. This can feel like loss, but it is liberation. The ice is melting; the river can flow again. The king approaches his temple — in the midst of dissolution, go to the sacred center. From there, you can cross the great water.",
    wellness: "Disperse what has stagnated. If you have been holding tension in a particular area, focus on releasing it. Wind-over-water suggests: use breath (wind) to move fluids (water). Deep, sighing exhales. Gentle bouncing to shake loose what is stuck. Also: emotional dispersion. Cry if you need to. Tears are the body's way of dispersing accumulated grief."
  },
  {
    n: 60, name: "Limitation", cn: "节", symbol: "䷻",
    judgment: "Limitation. Success. Galling limitation must not be persevered in.",
    interpretation: "Water over lake — the lake holds only so much water before it overflows. Limitation, like the banks of a river, gives form and direction to flow. You are being asked to set limits: on your spending, your indulgence, your commitments, your speech. Limits are not punishment; they are the necessary structure within which freedom becomes meaningful. But the hexagram adds a crucial note: limitation that galls (chafes, irritates, crushes) must not be made permanent. Find the right limit — enough to contain but not enough to suffocate.",
    wellness: "Set limits in your wellness practice. Not the galling limitation of deprivation, but the sweet limitation of rhythm. Eat within a window. Practice for a defined period. Sleep and wake at consistent times. The body thrives within boundaries. But if a limitation feels like punishment, it is the wrong limitation. Adjust."
  },
  {
    n: 61, name: "Inner Truth", cn: "中孚", symbol: "䷼",
    judgment: "Inner Truth. Pigs and fishes. Good fortune. It furthers one to cross the great water. Perseverance furthers.",
    interpretation: "Wind above, lake below — the image of the heart-mind (wind) resting on inner joy (lake). This hexagram speaks of authenticity, of the power that comes when inner and outer are aligned. 'Pigs and fishes' — even the simplest, least sophisticated beings respond to genuine truth. You do not need to be eloquent or impressive. If your heart is true, even pigs and fishes will feel it. This inner truth is what allows you to cross the great water.",
    wellness: "The most healing practice is the one you actually do with presence. Inner truth in wellness means: stop pretending. If you hate running, do not run. If meditation makes you anxious, do not meditate. Find the practice that your body genuinely responds to and do it with full heart. Inner truth, not outer performance."
  },
  {
    n: 62, name: "Preponderance of the Small", cn: "小过", symbol: "䷽",
    judgment: "Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done. The flying bird brings the message: it is not well to strive upward, it is well to remain below. Great good fortune.",
    interpretation: "Thunder on the mountain — a small excess, a slight overcorrection. The hexagram image is a bird flying too high, and the counsel is: come down. Small, modest actions succeed now; grand gestures will fail. You may be trying too hard, reaching too far, pushing too much. The bird's message: descend. Find solid ground. The small preponderance is correctable — just ease back slightly. Great good fortune awaits below.",
    wellness: "You may be overdoing it — training too hard, restricting too much, pushing past your limits. The bird flying too high is the body's signal to descend. Ease off. Small, gentle movements (walking, stretching, slow qigong) are indicated. Great workouts are contraindicated. Listen to the flying bird — it carries the message from your body."
  },
  {
    n: 63, name: "After Completion", cn: "既济", symbol: "䷾",
    judgment: "After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder.",
    interpretation: "Water above fire — the perfect balance, the cooking completed, the work finished. This hexagram appears when something has been successfully accomplished. But it carries a somber warning: 'at the beginning good fortune, at the end disorder.' Completion is the beginning of decline. The perfect balance cannot be held; the fire will boil away the water, or the water will extinguish the fire. Enjoy the completion, but do not expect it to last. Prepare for the next cycle.",
    wellness: "You have reached a milestone — a health goal, a recovery, a breakthrough in practice. Celebrate it. But the hexagram warns: completion is not permanent. The body's balance is dynamic, not static. The after-completion phase requires maintenance, not complacency. Small, consistent practices (the 'small matters' that the hexagram favors) are how you sustain what you have achieved."
  },
  {
    n: 64, name: "Before Completion", cn: "未济", symbol: "䷿",
    judgment: "Before Completion. Success. The young fox, almost across the river, gets its tail wet. Nothing that would further.",
    interpretation: "Fire above water — the elements have not yet found their balance. You are in the final hexagram of the I Ching, and appropriately, it depicts something unfinished. The young fox is almost across the river but gets its tail wet at the last moment. You are close — very close — but not there yet. Do not rush the final step. The wet tail is a warning against premature celebration. Complete the crossing with full attention. The I Ching ends here because life never truly ends; every completion is a new beginning.",
    wellness: "You are almost at your goal — but not quite. The last stretch requires the most care. The young fox getting its tail wet: do not sabotage your progress at the final moment. If you have been healing, do not rush back into full activity. If you have been building a practice, do not skip the consolidation phase. Before completion is a sacred, fragile moment. Honor it with patience."
  }
];

// Wellness practices (Eight Brocades / 金刚功 adaptations)
const WELLNESS = [
  {
    id: 1,
    name: "Two Hands Hold Up the Heavens",
    cn: "双手托天",
    description: "Stand with feet shoulder-width. Interlace fingers, palms up. Inhale: raise hands overhead, press palms to the sky, rise onto toes. Exhale: lower. Regulates the Triple Burner (San Jiao) and opens the lung meridian. Balances all internal organs.",
    element: "Metal / 金",
    benefit: "Harmonizes the internal organs, opens the chest, improves posture"
  },
  {
    id: 2,
    name: "Drawing the Bow",
    cn: "左右开弓",
    description: "Horse stance. Extend left arm as if drawing a bow, right arm pulls back, index finger pointing up. Gaze at the extended hand. Switch sides. Strengthens the kidneys and lower back. Opens the chest and shoulders.",
    element: "Water / 水",
    benefit: "Strengthens kidneys and lower back, opens chest, builds leg strength"
  },
  {
    id: 3,
    name: "Separate Heaven and Earth",
    cn: "调理脾胃",
    description: "One hand presses up, palm to heaven; the other presses down, palm to earth. Hold the stretch, feeling the opposition. Switch. Harmonizes the spleen and stomach. Balances the middle burner.",
    element: "Earth / 土",
    benefit: "Harmonizes spleen and stomach, aids digestion, balances energy"
  },
  {
    id: 4,
    name: "Wise Owl Gazes Backward",
    cn: "五劳七伤",
    description: "Stand relaxed. Turn the head slowly to look behind, letting the body follow naturally. Return to center. Switch sides. Relieves the 'five exhaustions and seven injuries.' Releases neck and shoulder tension.",
    element: "Fire / 火",
    benefit: "Relieves chronic fatigue, releases neck tension, calms the heart-mind"
  },
  {
    id: 5,
    name: "Sway the Head and Swing the Tail",
    cn: "摇头摆尾",
    description: "Horse stance, hands on thighs. Circle the upper body, leading with the head, letting the tailbone swing opposite. Smooth, continuous motion. Dispels heart fire. Regulates the heart and small intestine.",
    element: "Fire / 火",
    benefit: "Dispels excess heart fire, calms anxiety, improves spinal mobility"
  },
  {
    id: 6,
    name: "Two Hands Hold the Feet",
    cn: "两手攀足",
    description: "Bend forward slowly, sliding hands down the back of the legs to grasp the feet or ankles. Hold, breathing deeply. Roll up vertebra by vertebra. Strengthens the kidneys and bladder meridian. Nourishes the lower back.",
    element: "Water / 水",
    benefit: "Strengthens kidneys, nourishes lower back, stretches the entire posterior chain"
  },
  {
    id: 7,
    name: "Clench Fists and Glare Fiercely",
    cn: "攒拳怒目",
    description: "Horse stance. Clench fists at waist, palms up. Punch forward slowly with one fist, rotating it, while glaring fiercely. Withdraw. Switch sides. Increases vital force. Strengthens the liver and gallbladder.",
    element: "Wood / 木",
    benefit: "Increases vitality, strengthens liver function, builds courage and resolve"
  },
  {
    id: 8,
    name: "Bouncing on the Toes",
    cn: "背后七颠",
    description: "Rise onto toes, hold for a moment, then drop the heels to the ground with a gentle震动 (vibration). Repeat seven times. Shakes loose stagnant qi. Awakens the entire body. The 'seven jolts' that close the practice.",
    element: "All elements / 五行",
    benefit: "Awakens entire body, shakes loose stagnation, grounds and centers"
  }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICHING, WELLNESS };
}
