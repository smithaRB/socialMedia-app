import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import PostShare from '../postShare/PostShare';

function ShareModal({ modelOpened, setModelOpened }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                //  opened={opened}
                // onClose={close}
                // title="Authentication"
                size='55%'
                overlayBlur={3}
                opened={modelOpened}
                onClose={() => setModelOpened(false)}
            >

                <PostShare />
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </>
    );
}

export default ShareModal