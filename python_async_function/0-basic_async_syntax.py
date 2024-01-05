#!/usr/bin/env python3
"""
Use the random module.
"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Await for random seconds
    then return amount of seconds awaited

    Parameters
    ----------
    max_delay : int
        max delaying(sleep) time in second(s)

    Returns
    -------
    float
        second(s) as float number
    """
    seconds = random.uniform(0, max_delay)
    await asyncio.sleep(seconds)
    return seconds