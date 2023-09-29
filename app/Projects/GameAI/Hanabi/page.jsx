'use client';

import { projectGameAIHanabi } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

const HanabiPage = () => {
  const {ref: howRef, inView: howView, entry: howEntry} = useInView({
    threshold: 0.14
  });
  const {ref: goalRef, inView: goalView, entry: goalEntry} = useInView({
    threshold: 1
  });

  projectGameAIHanabi[0].inView = howView
  projectGameAIHanabi[1].inView = goalView

  return (
    <>
      <article className='project_article'>
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Hanabi Gameplay
          </h1>
          <p className='text-base my-5'>
            Hanabi is an interesting card game that requires strategy and a unique way of communicating.
            The game is cooperative. The team must try to achieve a high score. If I remember correctly,
            the highest score is 25. You'll understand what this means when I go over how to play.
          </p>
          <p className="mb-5">
            This is yet another part where a framework was provided. The code for the game was already supplied,
            so we only had to figure out how to get the AI to play well. All of this was done in python.
          </p>
          <figure className='mb-5 flex justify-evenly items-center content-center'>
            <Image
              src={'/game-ai/hanabi.jpg'}
              alt="hanabi game"
              width={500}
              height={500}
            />
          </figure>
          <div ref={howRef}>
            <h2 id="how" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              How to Play
            </h2>
            <p className="mb-5">
              Hanabi has very good tutorial videos, and it is a simple game to play. There are five card colors
              and five values in the game.  1 to 5 for the values on the cards, and yellow, red, green, white, and
              blue for the colors. Each color has 5 cards increasing from 1 to 5. There are duplicates for the value 
              cards. There are three 1's, two 2's, two 3's, two 4's, and one 5 for each color. 
            </p>
            <p className="my-5">
              Shuffle the deck and hand out cards based on how many players there are. Now, this is the important
              part. Make sure the card in a players hand is facing away from the player. Sort of like Heads Up where
              you can't see what. Other players will see your cards and will have to help you decide which card is 
              best to play. 
            </p>
            <p className="my-5">
              The team can only give 8 hints and 3 strikes before the game is over. During a players turn,
              they can play a card, discard a card, or give a hint. Playing a card simply places the card
              onto the board. However, a player must place the card in order. For example, if the board
              is empty. All colors need a one to start its pile. You cannot place anything above a one. 
              Otherwise, that would result in a strike. Once a one is placed then the color will need a 
              two and so on.
            </p>
            <p className="my-5">
              A player can discard a card and earn back hint tokens that have been used. Remember there are 
              only 8 in the game. Also, remember that there are certain 
              amounts of a certain card. Discarding a 5 would be very unfortunate because there is only one. 
              Last, is giving a hint. Hints can only be given in this manner. You can only give a hint about a 
              color or a number. Never both. Also, you must point to those corresponding cards. 
              For example, "this card is blue" or "this card is a one" then point. Furthermore, you must
              point out all the cards that relate to that hint. For instance, if you say "this card is blue",
              but the player has more than one blue card, you must say "these cards are blue" and point 
              at all of them. Same goes for the numbers. You cannot leave any cards out.
            </p>
            <p className="mb-5">
              Once the game runs out of cards tally up the score by counting the number on top of each colors
              pile. Meaning don't add up the pile just count the top card of each deck, so if you get to 5
              for all colors the highest score would be 25 (5 colors 5 numbers). If you reach three strikes
              at any time, the game is over and you don't get a score. At least, I don't think you do.
            </p>
          </div>
         <div ref={goalRef}>
          <h2 id="goal" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Goal
            </h2>
            <p className="mb-5">
              I've included the link to the <Linkable
                link={'https://github.com/RaidenXP/Hanabi_AI_Agent_Lab_2'}
                text={'repository'}
              /> here. My partner and my code is found under the agents folder called Hanabit.py. 
              It contains a lot of comments that help explain what we were thinking and what
              the section does.
              The goal of this project was to create a decision model for and AI to get
              at least a score of 14 playing Hanabi. This was actually quite easy.
            </p>
            <p className="my-5">
              Originally, the bot discarded random cards and gave random hints. They gave random hints first
              then just played cards that were playable. This wasn't good enough, but suprisingly the bot
              still got a score of 11 or 12. My partner and I thought of a great simple idea. Just don't
              give random hints or discard random cards. The bot knows when a card is playable, so it won't
              play random ones. As a result, we made it give hints and discard cards based on probability.
            </p>
            <p className="mb-5">
              Once the bot gave better hints and discards the score went up to 14 and we completed the project.
              However, if the bot could get a higher score we could get extra credit points. Therefore, I tried
              to find ways to make the bot play better. One method that I implemented was making the bot play
              aggresively. Before, the bot was too scared to get strikes. Therefore, I made it so that the bot
              would try to play cards and maybe get lucky based on a high probability that the card in their
              hand is playable. Unfortunately, it only increased the score by a little.
            </p>
         </div>
        </div>
      </article>
      <RightPageNav items={projectGameAIHanabi}/>
    </>
  )
}

export default HanabiPage