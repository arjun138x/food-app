/**
 * Header
 *  - Logo
 *  - Nav links
 * Body
 *  - Search bar
 *  - Restaurant Container
 *    - Restaurant card
 *      - Img
 *      - name of restaurant, rating, cuisine, delivery time
 * Footer
 *  - Copy right
 *  - Links
 *  - Address
 *  - Contact
 *
 */

import Header from "./Header";

function App() {
  return (
    <div className="bg-red-100 min-h-screen min-w-full p-1">
      <Header />
    </div>
  );
}

export default App;
