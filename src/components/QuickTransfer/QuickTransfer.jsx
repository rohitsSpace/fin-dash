import React, { useRef, useState, useEffect } from "react";
import MoneyTransfer from "./MoneyTransfer";
import { ChevronLeft, ChevronRight } from "../icons";
import {
  AmountInputContainer,
  Avatar,
  ContactInfo,
  ContactItem,
  ContactsContainer,
  ContactsList,
  Label,
  Name,
  QuickTransferContainer,
  Role,
  ScrollButton,
} from "./styles";
import { CONTACTS } from "../../constants/contacts";

const QuickTransfer = () => {
  const contactsRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);

  const scrollContacts = (direction) => {
    if (contactsRef.current) {
      const scrollAmount = direction === "right" ? 200 : -200;
      contactsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (contactsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = contactsRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const currentRef = contactsRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <QuickTransferContainer>
      <ContactsContainer>
        {showLeftButton && (
          <ScrollButton onClick={() => scrollContacts("left")}>
            <ChevronLeft />
          </ScrollButton>
        )}

        <ContactsList ref={contactsRef}>
          {CONTACTS.map((contact, index) => (
            <ContactItem
              key={index}
              active={selectedContact?.name === contact.name}
              onClick={() => setSelectedContact(contact)}
            >
              <Avatar>
                {contact.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
              <ContactInfo>
                <Name active={selectedContact?.name === contact.name}>
                  {contact.name}
                </Name>
                <Role active={selectedContact?.name === contact.name}>
                  {contact.role}
                </Role>
              </ContactInfo>
            </ContactItem>
          ))}
        </ContactsList>

        {showRightButton && (
          <ScrollButton right onClick={() => scrollContacts("right")}>
            <ChevronRight />
          </ScrollButton>
        )}
      </ContactsContainer>

      <AmountInputContainer>
        <Label>Write Amount</Label>
        <MoneyTransfer />
      </AmountInputContainer>
    </QuickTransferContainer>
  );
};

export default QuickTransfer;
