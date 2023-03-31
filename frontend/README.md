To run:
npm install
npm start

I considered dockerizing it. But, I decided to prioritize elsewhere.

Changes I would make, given more time;
- Make use of redux or similar, rather than having each component handle its own state
- Look into different colors or methods of applying the blue filter to the top image background (The design seems to darken the brightest spots better, which provides a better canvas for the logo to go atop)
    - Alternately, modify the image externally and reupload
- Look into making the mailing list a popup, to cut down on some of the excessive scrolling involved in navigation.
- Make the availability column in the datagrid date-based, rather than just a string.

Design reasoning
- I'm still getting used to material ui. The framework I previously used when focused on react, semantic UI, appears to be largely abandoned at this point.
- I considered using a grid for placement of the button/text/icon on the top image. But, it seemed like absolute positioning would provide the best precision for placing components where they wouldn't clash with the background.