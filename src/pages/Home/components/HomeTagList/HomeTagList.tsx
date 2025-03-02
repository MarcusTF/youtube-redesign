import Svg from "../../../../assets/vector";
import EditHomeFeedTagsModal from "../../../../components/modals/EditHomeFeedTagsModal/EditHomeFeedTagsModal";
import Tag from "../../../../components/TagList/components/Tag/Tag";
import { TagList } from "../../../../components/TagList/TagList";
import { useHomeTagStore } from "../../../../store/tag";

import "./HomeTagList.css";

export function HomeTagList() {
  const { isEditTagsModalOpen, setIsEditTagsModalOpen } = useHomeTagStore();

  console.log(isEditTagsModalOpen);
  return (
    <>
      <TagList
        modifier="home"
        leading={
          <Tag
            modifier="options"
            id="options"
            onClick={() => {
              console.log("Options clicked");
              setIsEditTagsModalOpen(!isEditTagsModalOpen);
            }}
          >
            <Svg.MagicFeed.outline />
          </Tag>
        }
      />
      <EditHomeFeedTagsModal />
    </>
  );
}
