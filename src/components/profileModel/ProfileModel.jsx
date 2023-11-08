import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function ProfileModel({ modelOpened, setModelOpened }) {
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

                <form className="infoForm">
                    <h3>Your info</h3>

                    <div>
                        <input type="text"
                            className="infoInput"
                            name='First Name'
                            placeholder='First Name' />

                        <input type="text"
                            className="infoInput"
                            name='Last Name'
                            placeholder='Last Name' />
                    </div>

                    <div>
                        <input type="text"
                            className="infoInput"
                            name='WorksAt'
                            placeholder='Works at' />
                    </div>

                    <div>
                        <input type="text"
                            className="infoInput"
                            name='LiveIn'
                            placeholder='Lives In' />

                        <input type="text"
                            className="infoInput"
                            name='Country'
                            placeholder='Country' />
                    </div>

                    <div>
                        <input type="text"
                            className='infoInput'
                            placeholder='Relationship Status' />
                    </div>

                    <div>
                        Profile Image
                        <input type="file" name='profileImg' />
                        Cover Image
                        <input type="file" name='coverImg' />
                    </div>

                    <button className="button infoButton">Update</button>
                </form>
            </Modal>

            <Button onClick={open}>Open modal</Button>
        </>
    );
}

export default ProfileModel