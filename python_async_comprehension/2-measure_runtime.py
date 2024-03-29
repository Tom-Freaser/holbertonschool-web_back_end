#!/usr/bin/env python3
"""
measure the total runtime and return it
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    runtime total and return it
    """
    t_time = time.time()
    tasks = [async_comprehension() for i in range(4)]
    await asyncio.gather(*tasks)
    return time.time() - t_time
