# How to Test if Portfolio Styles Are Working

Follow these steps to verify if your portfolio styling is working correctly.

## Step 1: Start the Development Server

1. Open a terminal/command prompt
2. Navigate to your portfolio directory:
   ```
   cd c:\Users\user\Desktop\Portfolio\Portfolio
   ```

3. Start the Angular development server:
   ```
   ng serve
   ```

4. Wait for the build to complete (you should see a message like "Angular Live Development Server is listening")

## Step 2: Open Your Portfolio in a Browser

1. Open your web browser
2. Navigate to: `http://localhost:4200`

## Step 3: Check for Styling

### What You Should See If Styles Are Working:

1. **Dark Background**: The page should have a dark gradient background
2. **Styled Text**: Headings should be large and white, with some in blue
3. **Cards**: Project and skill sections should appear as cards with rounded corners
4. **Buttons**: Buttons should be blue with rounded corners
5. **Hover Effects**: Buttons and cards should change when you hover over them
6. **Responsive Layout**: On mobile, the layout should adjust appropriately

### What You'll See If Styles Aren't Working:

1. **Plain HTML**: Elements will appear with default browser styling
2. **Black Text on White Background**: No custom colors applied
3. **No Spacing**: Elements will be close together with default margins
4. **No Hover Effects**: No interactive elements
5. **Poor Layout**: Elements won't be properly positioned

## Step 4: Look for the Test Section

Scroll down to find the "Style Test" section with three cards. If styles are working:

1. You should see a large heading "Style Test"
2. Three cards with gray backgrounds
3. Blue headings in each card
4. A styled button that changes color on hover

## Step 5: Check Browser Developer Tools

1. Right-click on the page and select "Inspect" or press F12
2. Look at the "Elements" tab
3. Click on various elements and check the "Styles" panel on the right
4. You should see Tailwind classes being applied (e.g., `text-white`, `bg-gray-800`)

## Step 6: Check the Network Tab

1. In Developer Tools, go to the "Network" tab
2. Refresh the page
3. Look for `styles.css` and `fallback-styles.css` in the list
4. They should show as "200" status (loaded successfully)

## If Styles Still Aren't Working

1. Check the troubleshooting guide: `TROUBLESHOOTING.md`
2. Try the solutions in order:
   - Restart the development server
   - Clear browser cache
   - Verify file paths in `index.html`
   - Check that Tailwind is properly installed

## If Styles Are Working

1. Remove the test component from `app.html`:
   ```html
   <!-- Remove this line -->
   <app-test></app-test>
   ```

2. Your portfolio is ready to use!

## Need Help?

If you're still having issues:
1. Take a screenshot of your portfolio
2. Take a screenshot of the browser console (F12 → Console tab)
3. Check the troubleshooting guide for specific error messages