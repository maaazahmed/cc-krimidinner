import { createBrowserRouter } from "react-router-dom";
import { MobileFrameLayout } from "@/layouts";

import {
  AssignRoles,
  Home,
  SplashScreen,
  Setup,
  Invites,
  ExtraOptions,
  StartGame,
  RoundOne,
  RoundTwo,
  GameRating,
  GameRatingView,
  AmazomReview,
  ReviewComment,
  Characters,
  Characters2,
  FamilyDinner,
  YourCharacter,
  CharactersProfile,
  TestPage,
  InviteScreen
} from "@/pages";
import { AppRoutes } from "@/constants/app-routes";
import { AddPlayers } from "@/pages/add-players";

export const router = createBrowserRouter([
  {
    element: <MobileFrameLayout />,
    children: [
      {
        path: AppRoutes.splash_screen,
        element: <SplashScreen />,
      },
      {
        path: AppRoutes.home,
        element: <Home />,
      },
      {
        path: AppRoutes.setup,
        element: <Setup />,
      },
      {
        path: AppRoutes.add_players,
        element: <AddPlayers />,
      },
      {
        path: AppRoutes.assign_roles,
        element: <AssignRoles />,
      },
      {
        path: AppRoutes.invites,
        element: <Invites />,
      },
      {
        path: AppRoutes.extras,
        element: <ExtraOptions />,
      },
      {
        path: AppRoutes.start_game,
        element: <StartGame />,
      },
      {
        path: AppRoutes.round_1,
        element: <RoundOne />,
      },
      {
        path: AppRoutes.round_2,
        element: <RoundTwo />,
      },
      {
        path: AppRoutes.rating,
        element: <GameRating />
      },
      {
        path: AppRoutes.game_rating_view,
        element: <GameRatingView />,
      },
      {
        path: AppRoutes.review_amazom,
        element: <AmazomReview />,
      },
      {
        path: AppRoutes.review,
        element: <ReviewComment />,
      },
      {
        path: AppRoutes.characters,
        element: <Characters />,
      },
      {
        path: AppRoutes.characters_2,
        element: <Characters2 />,
      },
      {
        path: AppRoutes.family_dinner,
        element: <FamilyDinner />,
      },
      {
        path: AppRoutes.your_character,
        element: <YourCharacter />,
      },
      {
        path: AppRoutes.characters_profile,
        element: <CharactersProfile />,
      },
      {
        path: AppRoutes.test_page,
        element: <TestPage />,
      },
      {
        path: AppRoutes.invite_page,
        element: <InviteScreen />,
      },
    ],
  },
]);
