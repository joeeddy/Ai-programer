from agent import Agent

def main():
    agent = Agent("TestAgent")
    obs = "example_observation"
    action = agent.act(obs)
    print(f"Agent action: {action}")

if __name__ == "__main__":
    main()
