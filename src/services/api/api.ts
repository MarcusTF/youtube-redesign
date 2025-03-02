import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { VideoCardProps } from "../../components/VideoCard/VideoCard";
import { Image } from "../../types";
import { Faker, FakerResponse } from "./api.types";

export const API_URL = "https://fakerapi.it/api/v2/";

const VIDEO_PARAMS = {
  id: Faker.uuid,
  thumbnail: Faker.image,
  duration: Faker.number,
  channelAvatar: Faker.image,
  title: Faker.streetName,
  channelName: Faker.name,
  views: Faker.number,
  uploadDateTime: Faker.dateTime,
};

export const api = axios.create({
  baseURL: API_URL,
});

export interface GetTagsProps {
  page: number;
  perPage: number;
}

export type GetTagsResult = {
  id: string;
  name: string;
};

export async function getTags({
  page = 1,
  perPage = 40,
}: Partial<GetTagsProps> = {}) {
  return await api.get<FakerResponse<GetTagsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page,
      id: Faker.uuid,
      name: Faker.pokemon,
    },
  });
}

export function useGetTags({ page = 1, perPage = 40 }: Partial<GetTagsProps>) {
  return useQuery({
    queryKey: ["tags", { page, perPage }],
    queryFn: () => getTags({ page, perPage }),
  });
}

export interface GetSubscriptionsProps {
  page: number;
  perPage: number;
}

export type GetSubscriptionsResult = {
  id: string;
  name: string;
  avatar: Image;
};

export async function getSubscriptions({
  page,
  perPage,
}: GetSubscriptionsProps) {
  return await api.get<FakerResponse<GetSubscriptionsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page,
      id: Faker.uuid,
      avatar: Faker.image,
      name: Faker.name,
    },
  });
}

export function useGetSubscriptions({
  page = 1,
  perPage = 15,
}: GetSubscriptionsProps) {
  return useQuery({
    queryKey: ["subscriptions", { page, perPage }],
    queryFn: () => getSubscriptions({ page, perPage }),
  });
}

export interface VideosProps {
  page: number;
  perPage: number;
  tag?: string;
}

export type GetInCaseYouMissedProps = VideosProps;

export type GetInCaseYouMissedResult = VideoCardProps & {
  [key: string]: unknown;
};

export async function getInCaseYouMissed({
  page,
  perPage,
  tag,
}: GetInCaseYouMissedProps) {
  return await api.get<FakerResponse<GetInCaseYouMissedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || ""),
      ...VIDEO_PARAMS,
    },
  });
}

export function useGetInCaseYouMissed({
  page = 1,
  perPage = 15,
  tag,
}: GetInCaseYouMissedProps) {
  return useQuery({
    queryKey: ["inCaseYouMissed", { page, perPage, tag }],
    queryFn: () => getInCaseYouMissed({ page, perPage, tag }),
  });
}

export type GetFeedProps = VideosProps;

export type GetFeedResult = VideoCardProps & { [key: string]: unknown };

export async function getFeed({ page, perPage, tag }: GetFeedProps) {
  return await api.get<FakerResponse<GetFeedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 9999,
      ...VIDEO_PARAMS,
    },
  });
}

export function useGetFeed({ page = 1, perPage = 15, tag }: GetFeedProps) {
  return useQuery({
    queryKey: ["feed", { page, perPage, tag }],
    queryFn: () => getFeed({ page, perPage, tag }),
  });
}

export type GetSuggestionsProps = VideosProps;

export type GetSuggestionsResult = VideoCardProps & { [key: string]: unknown };

export async function getSuggestions({
  page,
  perPage,
  tag,
}: GetSuggestionsProps) {
  return await api.get<FakerResponse<GetSuggestionsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 7777,
      ...VIDEO_PARAMS,
    },
  });
}

export function useGetSuggestions({
  page = 1,
  perPage = 15,
  tag,
}: GetSuggestionsProps) {
  return useQuery({
    queryKey: ["suggestions", { page, perPage, tag }],
    queryFn: () => getSuggestions({ page, perPage, tag }),
  });
}

export type GetShortsProps = VideosProps;

export type GetShortsResult = VideoCardProps & { [key: string]: unknown };

export async function getShorts({ page, perPage, tag }: GetShortsProps) {
  return await api.get<FakerResponse<GetShortsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 8888,
      ...VIDEO_PARAMS,
    },
  });
}

export function useGetShorts({ page = 1, perPage = 15, tag }: GetShortsProps) {
  return useQuery({
    queryKey: ["shorts", { page, perPage, tag }],
    queryFn: () => getShorts({ page, perPage, tag }),
  });
}

export type GetUserProps = {
  username: string;
};

export type GetUserResult = {
  id: string;
  username: string;
  avatar: Image;
};

export async function getUser({ username }: GetUserProps) {
  return await api.get<FakerResponse<GetUserResult>>("custom", {
    params: {
      _quantity: 1,
      _seed: username,
      id: Faker.uuid,
      username: Faker.name,
      avatar: Faker.image,
    },
  });
}

export function useGetUser({ username }: GetUserProps) {
  return useQuery({
    queryKey: ["user", { username }],
    queryFn: () => getUser({ username }),
    select: (data) => ({
      ...data,
      data: {
        ...data.data,
        data: data.data.data[0],
      },
    }),
  });
}

export type GetNotificationsProps = VideosProps;

export type GetNotificationsResult = VideoCardProps & {
  [key: string]: unknown;
};

export async function getNotifications({ page, perPage, tag }: GetShortsProps) {
  return await api.get<FakerResponse<GetNotificationsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 8888,
      ...VIDEO_PARAMS,
    },
  });
}

export function useGetNotifications({
  page = 1,
  perPage = 15,
  tag,
}: GetShortsProps) {
  return useQuery({
    queryKey: ["notifications", { page, perPage, tag }],
    queryFn: () => getNotifications({ page, perPage, tag }),
  });
}
