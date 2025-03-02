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

export interface GetInCaseYouMissedProps {
  page: number;
  perPage: number;
}

export type GetInCaseYouMissedResult = VideoCardProps;

export const getInCaseYouMissed = async ({
  page,
  perPage,
}: GetInCaseYouMissedProps) => {
  return await api.get<FakerResponse<GetInCaseYouMissedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page,
      ...VIDEO_PARAMS,
    },
  });
};

export const useGetInCaseYouMissed = ({
  page = 1,
  perPage = 15,
}: GetInCaseYouMissedProps) =>
  useQuery({
    queryKey: ["inCaseYouMissed", { page, perPage }],
    queryFn: () => getInCaseYouMissed({ page, perPage }),
  });

export interface GetFeedProps {
  page: number;
  perPage: number;
}

export type GetFeedResult = VideoCardProps;

export const getFeed = async ({ page, perPage }: GetFeedProps) => {
  return await api.get<FakerResponse<GetFeedResult>>("custom", {
    params: {
      _quantity: perPage,
      _seed: page + "9999",
      ...VIDEO_PARAMS,
    },
  });
};

export const useGetFeed = ({ page = 1, perPage = 15 }: GetFeedProps) =>
  useQuery({
    queryKey: ["feed", { page, perPage }],
    queryFn: () => getFeed({ page, perPage }),
  });

export interface GetSearchProps {
  query: string;
  page: number;
  perPage: number;
}

export type GetSearchResult = VideoCardProps;
