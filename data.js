// ============================================
// Personal Grounding & Check-In Tool — Data
// Categories, Quotes (15 each), Grounding techniques
// ============================================

const CATEGORIES = [
  { id: "routine_timing", label: "Routine timing off", icon: "🕉️" },
  { id: "interrupted", label: "Someone interrupted me", icon: "🚪" },
  { id: "sensory_noise", label: "Sensory/noise disturbance", icon: "🔊" },
  { id: "unexpected_task", label: "Unexpected task", icon: "📋" },
  { id: "space_disrupted", label: "Space/environment disrupted", icon: "🏠" },
  { id: "other", label: "Other", icon: "✨" }
];

const QUOTES = {
  routine_timing: [
    "Yudhishthira waited years in exile without rushing destiny — when the moment came, dharma returned to him. Moral: what's yours arrives in its time, not yours to force.",
    "Bhishma chose the hour of his own death, lying on arrows until the sun turned north. Moral: even ending can wait for the right moment — yours can too.",
    "Krishna delayed the Kurukshetra war through endless peace missions before letting it begin. Moral: delay isn't defeat, it's dharma working at its own pace.",
    "Ramakrishna would sit for hours before the Kali temple bell was rung, undisturbed by the priests' schedule. Moral: sacredness isn't rushed by someone else's clock.",
    "Arjuna's Gandiva stayed silent for thirteen years of exile before it was drawn again. Moral: the tool waits for you, not the other way around.",
    "Savitri followed Yama step by step, refusing to match his hurried pace toward death. Moral: walk your rhythm even when the world moves faster.",
    "Ramakrishna told a disciple that a fruit forced to ripen early never tastes as sweet. Moral: your timing, not the clock's, decides what's ripe.",
    "Nala wandered mismatched seasons of fortune before finding Damayanti again, never forcing the reunion. Moral: what's disrupted still finds its way back on its own schedule.",
    "Draupadi's cheer of vindication came only after thirteen long years, not the moment she wished it. Moral: patience isn't passive — it's dharma in waiting.",
    "Ramakrishna said the tide comes to the shore whether you watch it or not. Moral: your practice returns to you, even if today's shore looks empty.",
    "Vidura withdrew from the court's chaos and kept his own counsel on his own hours. Moral: you can hold your rhythm even inside someone else's disorder.",
    "Krishna's own birth happened at midnight, in a prison cell, at exactly the hour prophecy demanded. Moral: the right time chooses its own hour, not yours.",
    "Ramakrishna waited years for his vision of the Divine Mother, never forcing it to appear sooner. Moral: what you seek arrives when it's ready, not when you're impatient.",
    "The Pandavas' final journey up the mountain took each brother at their own pace, none hurried by another's fall. Moral: your path keeps its own timing, regardless of who moves faster.",
    "Ramakrishna compared spiritual growth to a seed that cannot be pulled up to grow faster. Moral: rushed timing uproots more than it saves."
  ],
  interrupted: [
    "Duryodhana barged into Krishna's sleeping chamber and sat by his head, uninvited. Krishna woke calmly and greeted whoever his eyes first met. Moral: someone else's rudeness doesn't have to set your response.",
    "Vyasa was interrupted mid-dictation by his own vow to never pause the Mahabharata's flow. Moral: guard your flow, but don't let the guarding become another disruption.",
    "A disciple burst in on Ramakrishna during deep meditation; he simply opened his eyes and smiled. Moral: depth doesn't shatter — only your grip on it does.",
    "Shakuni's schemes constantly cut across the Pandavas' plans, yet they kept returning to their own path. Moral: interruptions test your return, not your original direction.",
    "Draupadi's dice-hall humiliation interrupted a peaceful court, yet dharma was not lost that day, only delayed. Moral: someone barging in doesn't get to decide the ending.",
    "Ramakrishna let children run through his room during worship, calling their noise its own kind of prayer. Moral: what interrupts you might just be uninvited, not wrong.",
    "Karna was stopped mid-archery lesson by Parashurama's curse yet still shot true years later. Moral: an interruption can delay mastery, not erase it.",
    "Bhima crashed into Arjuna's forest solitude with news of danger, and Arjuna rose without resentment. Moral: the ones who interrupt you may also be the ones who need you.",
    "Ramakrishna once stopped his own singing when a visitor entered, giving full attention instead of finishing his line. Moral: sometimes the interruption is the more important moment.",
    "Abhimanyu entered the Chakravyuha alone, uninvited help arriving too late to change what he'd already begun. Moral: not every interruption in your story is yours to control.",
    "Yudhishthira's peaceful dice game was hijacked by Shakuni's loaded dice, yet his composure outlasted the cheating. Moral: someone can interrupt the game, not your character.",
    "A brahmin's sudden arrival at Karna's meditation cost him his invincibility, yet he kept his word anyway. Moral: honor your response even when the interruption costs you.",
    "Ramakrishna welcomed unannounced visitors at all hours, saying the divine doesn't check a schedule. Moral: the interruption may be carrying something meant for you.",
    "Drona's teaching was disrupted daily by rival princes vying for his attention, yet Arjuna's focus never wavered. Moral: let others compete for the noise; keep your focus for the work.",
    "Kunti's quiet years were interrupted by Karna's arrival at her doorstep just once — and it reshaped everything after. Moral: not all interruptions are unwelcome once you sit with them."
  ],
  sensory_noise: [
    "Arjuna hit the target by sound alone, undisturbed by the crowd's noise around him. Moral: your aim doesn't need silence, just focus.",
    "Ramakrishna said the mind can find Kali's temple even in a marketplace's roar. Moral: stillness lives in you, not in the room.",
    "Dhritarashtra, blind from birth, ruled by ear alone, unfazed by the court's constant clamor. Moral: perception need not depend on the quiet you're owed.",
    "Vyasa dictated the Mahabharata amid Ganesha's fast, unbroken pen, never letting scratching noise slow the verse. Moral: your work can outpace the disturbance around it.",
    "Ramakrishna once said a mother's ears hear the child's cry through any din. Moral: what truly matters cuts through the noise on its own.",
    "Bhishma lay on his bed of arrows through nine days of chants, wails, and battle drums, undisturbed. Moral: peace can be chosen even on a bed of nails.",
    "The sage Vishwamitra's penance was broken by Menaka's anklets, yet a lifetime later, his resolve returned stronger. Moral: one disturbance doesn't erase years of practice.",
    "Ramakrishna described the ocean as calm beneath even when its surface roars with waves. Moral: the noise on top isn't the truth underneath.",
    "Krishna played his flute over the tumult of Vrindavan's cattle and cries, and only those meant to hear, heard it clearly. Moral: your signal reaches who it needs to, despite the noise.",
    "Yudhishthira answered the Yaksha's questions beside a lake loud with his brothers' fallen bodies, keeping his composure. Moral: grief and noise can coexist with a steady mind.",
    "Ramakrishna sat through temple bells, crowds, and construction alike, saying disturbance is just the world doing its work. Moral: let the world be loud; you can still be still.",
    "Draupadi's cries in the dice hall went unanswered by a chamber full of noise and silence both. Moral: not all disturbance needs your reaction — some just needs your witness.",
    "Hanuman crossed the ocean past roaring waves and screeching Surasa, unbroken in purpose. Moral: the racket around you is not the obstacle to your task.",
    "Ramakrishna compared worldly noise to a barking dog — loud, but not something to change your path. Moral: bark doesn't decide your direction.",
    "Arjuna meditated on Pashupatastra's mantra through storms Indra sent to test him. Moral: the storm outside is not permission to stop within."
  ],
  unexpected_task: [
    "Krishna took up the charioteer's reins, a task never planned, and steered the war anyway. Moral: the unplanned task can still be yours to do well.",
    "Arjuna was handed a year of hiding as a dance teacher, unasked for and unwanted. Moral: even a role you didn't choose can be played with skill.",
    "Ramakrishna dropped his meditation without complaint when a guest arrived needing food. Moral: what interrupts your plan may be your actual work today.",
    "Bhima was sent to fetch a flower and instead found a mountain of trouble at Hanuman's tail. Moral: simple errands can turn into tests — meet them as they come.",
    "Draupadi was suddenly asked to cook for sages arriving without notice, and Krishna's grain fed them all. Moral: the sudden demand is provided for, even when you can't see how yet.",
    "Nakula and Sahadeva took on cattle-herding in exile, work far below their training. Moral: no task is beneath you if the moment calls for it.",
    "Yudhishthira answered riddle after riddle from an unseen Yaksha with no warning or preparation. Moral: readiness isn't about knowing what's coming, it's about how you meet it.",
    "Ramakrishna once left his own worship abruptly to nurse a sick disciple through the night. Moral: care doesn't wait for a convenient hour.",
    "Karna gave away his armor at dawn to a beggar who was truly Indra in disguise. Moral: the demand you didn't expect can still be met with grace.",
    "Ekalavya was asked for his thumb as guru-dakshina, a price no one warned him of. Moral: some tasks cost more than planned — you still get to choose your response.",
    "Ramakrishna interrupted his own silence to answer a child's question, calling it worship too. Moral: the task that broke your plan may be the plan.",
    "Hanuman was asked mid-flight to also carry news, medicine, and hope, none of it in the original mission. Moral: capability grows exactly when the task multiplies.",
    "Vidura was called suddenly to mediate a family dispute he never asked to referee. Moral: unasked-for responsibility still deserves your full presence.",
    "Ramakrishna abandoned his meal once to attend to a wounded bird outside his window. Moral: some tasks arrive small and urgent — treat them so.",
    "Abhimanyu was thrust into battle formation training half-learned, no time to finish the lesson. Moral: incomplete preparation doesn't excuse you from showing up anyway."
  ],
  space_disrupted: [
    "The Pandavas' palace of illusion mocked Duryodhana's confusion, yet they stayed rooted in Indraprastha's real ground. Moral: a shaken space doesn't have to shake you.",
    "Ramakrishna moved between his small room and the temple courtyard, saying the divine wasn't confined to either. Moral: your practice isn't owned by one room.",
    "The Pandavas were exiled from their palace into the forest, rebuilding devotion without walls. Moral: environment can change; the practice travels with you.",
    "Draupadi's chamber was invaded and violated in the dice hall, yet her dignity was never truly stripped. Moral: what's yours inwardly survives even a disrupted space.",
    "Ramakrishna's room was rearranged constantly by visitors and disciples, yet he called it still sacred. Moral: sacredness is placed by you, not by the furniture.",
    "The Pandavas turned Khandavaprastha, a wasteland, into Indraprastha through patient work, not by waiting for better ground. Moral: disrupted space is where you build next, not where you stop.",
    "Ramakrishna's disciples often disturbed his samadhi space with construction and errands, and he'd return to it unbothered. Moral: your space can be interrupted; your center doesn't have to be.",
    "Sita's Ashoka grove imprisonment couldn't touch the garden she kept inside her mind. Moral: they can disrupt the room, not the refuge within it.",
    "Krishna's Dwarka was swallowed by the sea in the end, yet what he built through it remained in memory. Moral: even when the space is gone, what you did there stays.",
    "Arjuna's forest hermitage was crossed constantly by travelers and animals, never fully his alone. Moral: shared space doesn't dilute private practice.",
    "Ramakrishna welcomed a leper into his own room without flinching at the disruption to his space. Moral: what disturbs the room may still belong there.",
    "Bhishma's deathbed of arrows was set in an open field, no walls, no privacy, and still he taught from it. Moral: the most disrupted space can still hold the deepest lesson.",
    "The sage Durvasa's temper turned a peaceful hermitage into chaos in moments, yet the forest recovered by morning. Moral: disruption is a season, not a sentence.",
    "Ramakrishna said even Kali's temple gets swept, repainted, and rearranged, and she doesn't leave because of it. Moral: what you honor there survives the renovation.",
    "Yudhishthira's court at Indraprastha was rebuilt smaller after exile, yet dharma sat just as fully in it. Moral: a diminished space can still hold your whole practice."
  ],
  other: [
    "Ramakrishna said even the smallest offering, sincerely given, satisfies the divine as much as the grandest ritual. Moral: what doesn't fit a category can still hold meaning.",
    "Vidura's counsel came without title or ceremony, yet dharma listened anyway. Moral: not everything needs a name to matter.",
    "Krishna's own birth happened in a prison cell, no palace, no plan. Moral: the unnamed disruption can still carry the most important beginning.",
    "Ramakrishna once said God comes disguised as whatever knocks, expected or not. Moral: don't dismiss what doesn't fit your list.",
    "Shakuntala's ring was lost to a river by chance, an accident with no category of its own. Moral: some disruptions are just life being life.",
    "Ramakrishna compared the mind to a monkey bitten by a scorpion, restless for no single traceable reason. Moral: not all irritation needs a source to be real.",
    "Ganesha's broken tusk became the very pen for the Mahabharata. Moral: what breaks unexpectedly may still become useful.",
    "Karna's chariot wheel sank in mud at the worst possible moment of battle, an unclassifiable stroke of fate. Moral: some disruptions defy explanation and still must be met.",
    "Ramakrishna said a devotee's tears, wherever they fall from, water the same garden. Moral: the source of disturbance matters less than your response to it.",
    "Yudhishthira's dog followed him up the mountain to heaven, unasked and unexplained. Moral: what accompanies you doesn't always need a reason.",
    "Ramakrishna once let a stray thought interrupt his teaching and used it as the day's lesson instead. Moral: the odd, unplaced moment can still teach you something.",
    "Draupadi's five husbands were the result of a misheard blessing, an accident with lasting consequence. Moral: even a mistake can become your path.",
    "Ramakrishna said sandalwood gives fragrance whether rubbed gently or harshly. Moral: how you're disturbed matters less than what you give back.",
    "Ashwatthama's fate was to wander forever, cursed for something no category could contain. Moral: some disruptions have no clean resolution — you carry them anyway.",
    "Ramakrishna said the ocean doesn't ask which river feeds it before accepting the water. Moral: whatever unsettles you today still belongs somewhere in your practice."
  ]
};

const GROUNDING = {
  High: [
    "Breathe in for 4, hold for 7, out for 8. Repeat three times.",
    "Hold something cold — water, a steel glass. Just notice the temperature.",
    "Name 5 things you can see right now. Say them slowly."
  ],
  Medium: [
    "Look around, describe one object in detail — shape, color, texture.",
    "Count backward from 30.",
    "Feel your feet on the ground. Notice the surface beneath them."
  ],
  Low: [
    "Take one slow breath before you continue.",
    "Notice one thing outside — sky, plant, air — for a few seconds."
  ]
};
