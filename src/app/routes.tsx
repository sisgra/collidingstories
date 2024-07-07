// Pages and Components
import Landing from '../pages/landing';
import BlogSingle from '../pages/blog/fr/index';
import CollidingStories from '../pages/colliding_stories/en/index';
import Navbar from '../components/Navbar';
import NavbarFr from '../components_fr/Navbar/index_fr';
import NavbarCS from '../components_cs/Navbar/index_cs';

// ------------------

/**
 * Render Navigation bar when rendering a component and isLanding to check
 * if the component to be rendered is the landing page or not.
 *
 * In landing page case: nav links works as scrollable links
 * other case(such as : blog): nav links works as router links
 *
 * @param comonent the component to be rendered
 * @param isLanding check for a component if its the landingpage
 * @returns the given component with the Navbar
 */
const renderWithNav = (
  comonent: JSX.Element,
  isLanding: boolean
): JSX.Element => {
  return (
    <>
      <Navbar isLanding={isLanding} />
      {comonent}
    </>
  );
};


const renderWithoutNav = (
  comonent: JSX.Element,
  isBlogSingle: boolean
): JSX.Element => {
  return (
    <>
      <NavbarFr isBlogSingle={isBlogSingle} />
      {comonent}
    </>
  );
};

const renderWithoutNavCS = (
  comonent: JSX.Element,
  isCollidingStories: boolean
): JSX.Element => {
  return (
    <>
      <NavbarCS isCollidingStories={isCollidingStories} />
      {comonent}
    </>
  );
};


type RoutesType = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
};

// Routes we will visit
const routes: RoutesType[] = [
  {
    path: '/',
    element: renderWithNav(<Landing />, true),
  },
  {
    path: '/fr',
    element: renderWithoutNav(<BlogSingle />, true),
  },
  {
    path: '/collidingstories',
    element: renderWithoutNavCS(<CollidingStories />, true),
  },
];

export default routes;

// ---------------
