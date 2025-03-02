import dayjs from "dayjs";
import Svg from "../../assets/vector";
import { bemModifiers } from "../../services/utilities";
import { DateTime, ImageUrl } from "../../types";
import "./VideoCard.css";

export interface VideoCardProps {
  /**
   * Video thumbnail image URL
   */
  thumbnail: ImageUrl;
  /**
   * Video duration in seconds
   */
  duration: number;
  /**
   * Channel avatar image URL
   */
  channelAvatar: ImageUrl;
  /**
   * Video title
   */
  title: string;
  /**
   * Channel name
   */
  channelName: string;
  /**
   * Video views
   */
  views: number;
  /**
   * Video upload time
   */
  uploadDateTime: DateTime;
  /**
   * Video ID
   */
  id: string;

  /**
   * Optional click handler for the video card
   */
  onClick?: () => void;
  /**
   * Optional loading state for the video card
   */
  loading?: boolean;
}

const EMPTY_VIDEO_FOR_SKELETON = {
  thumbnail: {
    url: "LOADING",
    description: ".",
    title: "",
  },
  duration: 0,
  channelAvatar: {
    url: "LOADING",
    description: ".",
    title: ".",
  },
  title: ".",
  channelName: ".",
  views: 0,
  uploadDateTime: {
    date: "",
    timezone: "",
    timezone_type: 1,
  },
  id: "loading",
} satisfies VideoCardProps;

function calculateDurationFromSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemaining = seconds % 60;

  const formattedHours = hours > 0 ? `${hours}:` : "";
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;

  const cappedHours = hours > 1 ? "1:" : formattedHours;

  return `${cappedHours}${formattedMinutes}:${formattedSeconds}`;
}

function calculateViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
}

const VideoCard = ({
  thumbnail = EMPTY_VIDEO_FOR_SKELETON.thumbnail,
  duration = EMPTY_VIDEO_FOR_SKELETON.duration,
  channelAvatar = EMPTY_VIDEO_FOR_SKELETON.channelAvatar,
  title = EMPTY_VIDEO_FOR_SKELETON.title,
  channelName = EMPTY_VIDEO_FOR_SKELETON.channelName,
  views = EMPTY_VIDEO_FOR_SKELETON.views,
  uploadDateTime = EMPTY_VIDEO_FOR_SKELETON.uploadDateTime,
  id,
  onClick = () => {},
  loading = false,
}: Partial<VideoCardProps>) => {
  return (
    <article
      className={bemModifiers("video-card", { loading })}
      onClick={onClick}
    >
      <div className="video-card__thumbnail-container">
        <div className="video-card__thumbnail-wrapper">
          {thumbnail?.url && thumbnail?.url !== "LOADING" ? (
            <img
              src={`${thumbnail?.url}?random=${id}`}
              alt={thumbnail?.description}
              className="video-card__thumbnail-background"
              aria-hidden="true"
            />
          ) : (
            <div className="video-card__thumbnail-background skeleton" />
          )}
        </div>
        <span
          className="video-card__duration"
          aria-label={`Duration: ${calculateDurationFromSeconds(duration)}`}
        >
          {calculateDurationFromSeconds(duration)}
        </span>
      </div>

      <div className="video-card__info-container">
        <div className="video-card__content-wrapper">
          {channelAvatar?.url && channelAvatar?.url !== "LOADING" ? (
            <img
              src={`${channelAvatar?.url}?random=${id}2`}
              alt={`${channelName} channel avatar`}
              className="video-card__channel-avatar"
            />
          ) : (
            <div className="video-card__channel-avatar skeleton" />
          )}
          <div className="video-card__text-content">
            <h3 className="video-card__title" title={title}>
              {title}
            </h3>
            <div className="video-card__channel-info">
              <div className="video-card__channel-name-wrapper">
                <span className="video-card__channel-name">{channelName}</span>
              </div>
              <p className="video-card__statistics">{`${calculateViews(views)} views • ${Math.abs(dayjs(uploadDateTime?.date).diff(dayjs(), "year"))} days ago`}</p>
            </div>
          </div>
        </div>
        <button
          className="video-card__menu-button"
          aria-label="More options"
          onClick={(e) => {
            e.stopPropagation();
            // Handle menu click
          }}
        >
          <Svg.MenuDots className="video-card__menu-icon" />
        </button>
      </div>
    </article>
  );
};

export default VideoCard;
