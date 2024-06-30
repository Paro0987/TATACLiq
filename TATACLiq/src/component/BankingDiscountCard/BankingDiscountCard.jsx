import React, { useState } from 'react';
import { Box, Image, Center, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import ErrorImage from '../../assets/images/Error-404-Page.gif'; // Import your error image
import BankDiscount1 from '../../assets/images/bankdiscount1.png';
import BankDiscount2 from '../../assets/images/bankdiscount2.png';
import BankDiscount3 from '../../assets/images/bankdiscount3.png';

const BankingDiscountCard = () => {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [selectedDiscountImage, setSelectedDiscountImage] = useState(null);

    const handleBankDiscountClick = (imageSrc) => {
        setSelectedDiscountImage(imageSrc);
        setShowErrorModal(true);
    };

    const handleCloseModal = () => {
        setShowErrorModal(false);
        setSelectedDiscountImage(null);
    };

    return (
        <Center mt={8}>
            <Box display="flex" justifyContent="center">
                {/* Bank Discount Image Card 1 */}
                <Box p={4} onClick={() => handleBankDiscountClick(BankDiscount1)} cursor="pointer">
                    <Image src={BankDiscount1} alt="Bank Discount 1" width="370px" height="80px" />
                </Box>

                {/* Bank Discount Image Card 2 */}
                <Box p={4} onClick={() => handleBankDiscountClick(BankDiscount2)} cursor="pointer">
                    <Image src={BankDiscount2} alt="Bank Discount 2" width="370px" height="80px" />
                </Box>

                {/* Bank Discount Image Card 3 */}
                <Box p={4} onClick={() => handleBankDiscountClick(BankDiscount3)} cursor="pointer">
                    <Image src={BankDiscount3} alt="Bank Discount 3" width="370px" height="80px" />
                </Box>
            </Box>

            {/* Modal for Error Image */}
            <Modal isOpen={showErrorModal} onClose={handleCloseModal} size="full">
                <ModalOverlay />
                <ModalContent bg="#5a657a">
                    <ModalBody>
                        <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
                            <Image src={ErrorImage} alt="Error Image" maxWidth="100%" maxHeight="100%" />
                        </Box>
                    </ModalBody>
                    <ModalCloseButton color="white" />
                </ModalContent>
            </Modal>
        </Center>
    );
};

export default BankingDiscountCard;
