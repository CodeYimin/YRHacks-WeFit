import { Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ReactElement } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  useLikeWorkoutRecordMutation,
  useMeQuery,
  User,
  useUnlikeWorkoutRecordMutation,
  WorkoutRecord as IWorkoutRecord,
} from "../../../graphql/generated/graphql";
import { timeFromNow } from "../../../utils/time";
import IWorkoutRecordExercise from "./WorkoutRecordExercise";

const HeaderContainer = styled.div`
  background-color: #f3f3f3;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem;
`;

interface WorkoutRecordProps {
  workout: Pick<
    IWorkoutRecord,
    "id" | "name" | "exercises" | "createdAt" | "workoutSchemaId"
  > & {
    user: Pick<User, "id" | "username">;
  } & {
    likedBy: Pick<User, "id">[];
  };
}

function WorkoutRecord({
  workout: { exercises, id, name, createdAt, user, likedBy, workoutSchemaId },
}: WorkoutRecordProps): ReactElement {
  const navigate = useNavigate();

  const { data: { me } = {} } = useMeQuery();

  const [likeWorkout] = useLikeWorkoutRecordMutation({
    variables: { id },
    refetchQueries: "active",
  });

  const [unlikeWorkout] = useUnlikeWorkoutRecordMutation({
    variables: { id },
    refetchQueries: "active",
  });

  return (
    <VStack w="30rem" spacing="0">
      <HeaderContainer>
        <VStack alignItems="start" w="full">
          <Flex w="full" justifyContent="space-between" alignItems="center">
            <Text
              fontWeight="800"
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/profile/${user.id}`);
              }}
            >
              {user.username}
            </Text>
            <HStack>
              <Text>{likedBy.length}</Text>
              <IconButton
                size="sm"
                icon={<AiFillLike />}
                aria-label="like"
                onClick={() => {
                  console.log(likedBy);
                  if (likedBy.some((u) => u.id === me?.id)) {
                    unlikeWorkout();
                  } else {
                    likeWorkout();
                  }
                }}
              />
              <IconButton
                size="sm"
                icon={<FaPlay />}
                aria-label="play"
                onClick={() => navigate(`/workout?schemaId=${workoutSchemaId}`)}
              />
            </HStack>
          </Flex>
          <Flex w="full" justifyContent="space-between">
            <HStack>
              <Text fontWeight="500">Completed a workout: </Text>
              <Text>{name}</Text>
            </HStack>
            <Text>{timeFromNow(new Date(createdAt))} ago</Text>
          </Flex>
        </VStack>
      </HeaderContainer>
      <ContentContainer>
        <VStack>
          {exercises.map((exercise) => (
            <IWorkoutRecordExercise
              exercise={exercise}
            ></IWorkoutRecordExercise>
          ))}
        </VStack>
      </ContentContainer>
    </VStack>
  );
}

export default WorkoutRecord;
