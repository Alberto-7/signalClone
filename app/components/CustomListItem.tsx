import { View, Text } from "react-native";
import React from "react";
import { Avatar, ListItem } from "@rneui/base";

type Props = {
  id: number;
  chatName: string;
  enterChat: boolean;
};

const CustomListItem = ({ id, chatName, enterChat }: Props) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://images.vexels.com/media/users/3/299488/isolated/preview/8c8c1857cbcf222280a12a7f5a122abc-message-chat-bubbles-technology-icon.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>Beans</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          thisd text is super mega long mofo
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;
