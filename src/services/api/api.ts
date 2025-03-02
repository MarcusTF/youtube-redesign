import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { VideoCardProps } from "../../components/VideoCard/VideoCard";
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

export const getTags = async ({
  page = 1,
  perPage = 40,
}: Partial<GetTagsProps> = {}) => {
  return await api.get<FakerResponse<GetTagsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page,
      id: Faker.uuid,
      name: Faker.pokemon,
    },
  });
};

export const useGetTags = ({ page = 1, perPage = 40 }: Partial<GetTagsProps>) =>
  useQuery({
    queryKey: ["tags", { page, perPage }],
    queryFn: () => getTags({ page, perPage }),
  });

export interface GetSubscriptionsProps {
  page: number;
  perPage: number;
}

export type GetSubscriptionsResult = {
  id: string;
  name: string;
  avatar: string;
};

export const getSubscriptions = async ({
  page,
  perPage,
}: GetSubscriptionsProps) => {
  return await api.get<FakerResponse<GetSubscriptionsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page,
      id: Faker.uuid,
      avatar: Faker.image,
      name: Faker.name,
    },
  });
};

export const useGetSubscriptions = ({
  page = 1,
  perPage = 15,
}: GetSubscriptionsProps) =>
  useQuery({
    queryKey: ["subscriptions", { page, perPage }],
    queryFn: () => getSubscriptions({ page, perPage }),
  });

export interface VideosProps {
  page: number;
  perPage: number;
  tag?: string;
}

export type GetInCaseYouMissedProps = VideosProps;

export type GetInCaseYouMissedResult = VideoCardProps & {
  [key: string]: unknown;
};

export const getInCaseYouMissed = async ({
  page,
  perPage,
  tag,
}: GetInCaseYouMissedProps) => {
  return await api.get<FakerResponse<GetInCaseYouMissedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || ""),
      ...VIDEO_PARAMS,
    },
  });
};

export const useGetInCaseYouMissed = ({
  page = 1,
  perPage = 15,
  tag,
}: GetInCaseYouMissedProps) =>
  useQuery({
    queryKey: ["inCaseYouMissed", { page, perPage, tag }],
    queryFn: () => getInCaseYouMissed({ page, perPage, tag }),
  });

export type GetFeedProps = VideosProps;

export type GetFeedResult = VideoCardProps & { [key: string]: unknown };

export const getFeed = async ({ page, perPage, tag }: GetFeedProps) => {
  return await api.get<FakerResponse<GetFeedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 9999,
      ...VIDEO_PARAMS,
    },
  });
};

export const useGetFeed = ({ page = 1, perPage = 15, tag }: GetFeedProps) =>
  useQuery({
    queryKey: ["feed", { page, perPage, tag }],
    queryFn: () => getFeed({ page, perPage, tag }),
  });

export type GetSuggestionsProps = VideosProps;

export type GetSuggestionsResult = VideoCardProps & { [key: string]: unknown };

export const getSuggestions = async ({
  page,
  perPage,
  tag,
}: GetSuggestionsProps) => {
  return await api.get<FakerResponse<GetSuggestionsResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + (tag || "") + 9999,
      ...VIDEO_PARAMS,
    },
  });
};

export const useGetSuggestions = ({
  page = 1,
  perPage = 15,
  tag,
}: GetSuggestionsProps) =>
  useQuery({
    queryKey: ["suggestions", { page, perPage, tag }],
    queryFn: () => getSuggestions({ page, perPage, tag }),
  });
