import * as Dialog from "@radix-ui/react-dialog";
import { useHomeTagStore } from "../../../store/tag";

import { useGetTags } from "../../../api/api";
import Svg from "../../../assets/vector";
import { Input } from "../../inputs/Input/Input";
import Tag from "../../TagList/components/Tag/Tag";
import "./EditHomeFeedTagsModal.css";

export default function EditHomeFeedTagsModal() {
  const { isEditTagsModalOpen, setIsEditTagsModalOpen } = useHomeTagStore();

  const { data, isLoading } = useGetTags({ perPage: 30 });

  return (
    <Dialog.Root
      open={isEditTagsModalOpen}
      onOpenChange={setIsEditTagsModalOpen}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="modal__overlay modal__overlay--edit-home-tags" />
        <Dialog.Content className="modal__content-container modal__content-container--edit-home-tags">
          <div className="modal__content">
            <div className="modal__header">
              <h1>Personalized Feed</h1>
              <div className="modal__actions-container">
                <button className="modal__action-button modal__action-button--gear">
                  <Svg.Gear />
                </button>
                <button
                  onClick={() => setIsEditTagsModalOpen(false)}
                  className="modal__action-button modal__action-button--close"
                >
                  <Svg.Close />
                </button>
              </div>
            </div>
            <div className="modal__body">
              <div className="modal__body-section">
                <div className="modal__section-header">
                  <h2>Your Tags</h2>
                  <p>
                    These tags will be used to build your custom feed. You can
                    also filter out the content on your feed using these tags.{" "}
                    <br />
                    Enter a comma after a keyword to save it as a tag. Tags can
                    include: topics, content types (e.g., shorts, playlists,
                    etc.), channels, collections, etc.
                  </p>
                </div>
                <Input />
                <div className="tags">
                  {data?.data?.data?.slice?.(0, 20).map(({ id, name }) => (
                    <Tag key={id} modifier={"editing"} loading={isLoading}>
                      {name} <Svg.Close className="tag__close-icon" />
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="modal__body-section">
                <div className="modal__section-header">
                  <h2>Excluded Content</h2>
                  <p>
                    You can prevent certain content or creators from appearing
                    in your feed.
                  </p>
                </div>
                <Input />
                <div className="tags">
                  {data?.data?.data?.slice?.(20, 30).map(({ id, name }) => (
                    <Tag key={id} modifier={"editing"} loading={isLoading}>
                      {name} <Svg.Close className="tag__close-icon" />
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
